import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PlantaService } from './../plantanueva.service';
import { Plant } from './../models/plant.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage {
  planta: Plant = {
    id: '',
    common_name: '',
    description: '',
    tipo: '',
    tips: '',
    image_url: ''
  };
  photo: string = '';
  tiposDePlantas: string[] = ['Hierba', 'Arbusto', 'Árbol', 'Suculenta', 'Helecho', 'Cactus', 'Palmera', 'Conífera', 'Musgo', 'Orquídea'];

  constructor(private plantaService: PlantaService, private alertController: AlertController) {}

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = image.dataUrl!;
  }

  async onSubmit() {
    if (this.isFormValid()) {
      this.planta.image_url = this.photo;
      this.planta.id = this.generateUniqueId(); // Generar un ID único
      this.plantaService.addPlanta({ ...this.planta });
      this.savePlanta({ ...this.planta });
      this.planta = { id: '', common_name: '', description: '', tipo: '', tips: '', image_url: '' };
      this.photo = '';
      console.log('Planta guardada', this.plantaService.getPlantas());
      this.showAlert('Éxito', 'Planta guardada correctamente.');
    } else {
      this.showAlert('Error', 'Por favor, completa todos los campos y añade una imagen.');
    }
  }

  generateUniqueId(): string {
    const existingPlantas = JSON.parse(localStorage.getItem('plantas') || '[]');
    let newId: string;
    do {
      newId = Math.floor(Math.random() * 1000000).toString();
    } while (existingPlantas.some((p: any) => p.id === newId));
    return newId;
  }

  isFormValid(): boolean {
    return this.planta.common_name !== '' &&
           this.planta.description !== '' &&
           this.planta.tipo !== '' &&
           this.planta.tips !== '' &&
           this.photo !== '';
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  savePlanta(planta: Plant) {
    const savedPlantas = JSON.parse(localStorage.getItem('plantas') || '[]');
    const updatedPlantas = [...savedPlantas, planta];
    localStorage.setItem('plantas', JSON.stringify(updatedPlantas));
  }
}
