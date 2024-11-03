import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {
  alarmas: any[] = [];
  noAlarmas: boolean = false; // Variable para indicar si no hay alarmas activas

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.loadAlarmas();
  }

  loadAlarmas() {
    const savedAlarmas = JSON.parse(localStorage.getItem('alarmas') || '[]');
    this.alarmas = savedAlarmas.map((alarma: any) => ({
      ...alarma,
      schedule: alarma.schedule || { on: {}, repeats: false },
      enabled: alarma.enabled !== undefined ? alarma.enabled : true,
    }));
    console.log('Alarmas cargadas desde localStorage:', this.alarmas);
    this.noAlarmas = this.alarmas.length === 0; // Actualizar el indicador de alarmas
  }

  async toggleAlarma(id: number, enable: boolean) {
    const alarma = this.alarmas.find(a => a.id === id);
    if (alarma) {
      if (enable) {
        // Reprogramar la alarma
        await LocalNotifications.schedule({
          notifications: [alarma]
        });
      } else {
        // Cancelar la alarma
        await LocalNotifications.cancel({ notifications: [{ id }] });
      }
      // Actualiza el almacenamiento local
      alarma.enabled = enable;
      localStorage.setItem('alarmas', JSON.stringify(this.alarmas));
    }
    // Evitar el evento no pasivo
    requestAnimationFrame(() => {
      this.loadAlarmas();
    });
  }

  async confirmDeleteAlarma(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que quieres eliminar esta alarma?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteAlarma(id);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteAlarma(id: number) {
    this.alarmas = this.alarmas.filter(a => a.id !== id);
    localStorage.setItem('alarmas', JSON.stringify(this.alarmas));
    LocalNotifications.cancel({ notifications: [{ id }] });
    this.loadAlarmas();
  }
}
