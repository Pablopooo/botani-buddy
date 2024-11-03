import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantaService } from './../plantanueva.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Plant } from './../models/plant.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-plantas-mias',
  templateUrl: './plantas-mias.page.html',
  styleUrls: ['./plantas-mias.page.scss'],
})
export class PlantasMiasPage implements OnInit {
  planta: Plant | undefined;
  days: string[] = [];
  hour: string = '08:00'; // Hora por defecto
  isPeriodic: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private plantaService: PlantaService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.planta = this.plantaService.getPlantaById(id);
    }

    // Solicita permisos de notificaciones
    LocalNotifications.requestPermissions().then(permission => {
      if (permission.display === 'granted') {
        console.log('Permisos de notificación otorgados');
      } else {
        console.error('Permisos de notificación denegados');
      }
    });

    // Listener para las notificaciones recibidas
    LocalNotifications.addListener('localNotificationReceived', (notification) => {
      console.log('Notificación recibida:', notification);
    });

    // Listener para cuando una notificación es activada
    LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
      console.log('Notificación activada:', notification);
    });
  }

  async setAlarm() {
    console.log('setAlarm called');
    if (this.planta) {
      const [hour, minute] = this.hour.split(':').map(Number);
      if (!isNaN(hour) && !isNaN(minute)) {
        const dayOfWeek = this.days.map(day => this.getDayOfWeek(day));
        
        if (dayOfWeek.length > 0) {
          const notifications = dayOfWeek.map(day => ({
            title: 'Es hora de cuidar tu planta',
            body: 'Es momento de cuidar tu planta ' + (this.planta ? this.planta.common_name : ''),
            id: this.generateUniqueId(),
            schedule: {
              on: {
                weekday: day,
                hour,
                minute,
              },
              repeats: this.isPeriodic,
            }
          }));
          console.log('Notifications:', notifications);
          await LocalNotifications.schedule({ notifications });
          console.log(`Alarma configurada para la planta ${this.planta.common_name} a las ${this.hour}`);
          this.saveAlarmas(notifications);
          this.showConfirmation();
        } else {
          console.error('Seleccione al menos un día.');
        }
      } else {
        console.error('Invalid time value:', this.hour);
      }
    }
  }

  getDayOfWeek(day: string): number {
    const daysOfWeek = {
      'sunday': 0,
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3,
      'thursday': 4,
      'friday': 5,
      'saturday': 6
    };
    return daysOfWeek[day.toLowerCase() as keyof typeof daysOfWeek];
  }

  generateUniqueId(): number {
    const existingAlarmas = JSON.parse(localStorage.getItem('alarmas') || '[]');
    let newId: number;
    do {
      newId = Math.floor(Math.random() * 1000000);
    } while (existingAlarmas.some((a: any) => a.id === newId));
    return newId;
  }

  saveAlarmas(notifications: any[]) {
    console.log('saveAlarmas called with:', notifications);
    const savedAlarmas = JSON.parse(localStorage.getItem('alarmas') || '[]');
    const updatedAlarmas = [...savedAlarmas, ...notifications];
    localStorage.setItem('alarmas', JSON.stringify(updatedAlarmas));
    console.log('Alarmas guardadas en localStorage:', updatedAlarmas);
  }

  async showConfirmation() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Alarma configurada correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
