import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PlantaService } from './../plantanueva.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage {
  planta = {
    nombre: '',
    tipo: '',
    descripcion: '',
    foto: ''
  };
  photo: string = '';
  tiposDePlantas: string[] = ['Hierba', 'Arbusto', 'Árbol', 'Suculenta', 'Helecho', 'Cactus', 'Palmera', 'Conífera', 'Musgo', 'Orquídea'];

  constructor(private plantaService: PlantaService) {}

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = image.dataUrl!;
  }

  onSubmit() {
    this.planta.foto = this.photo;
    this.plantaService.addPlanta({ ...this.planta });
    this.planta = { nombre: '', tipo: '', descripcion: '', foto: '' };
    this.photo = '';
    console.log('Planta guardada', this.plantaService.getPlantas());
  }
}
