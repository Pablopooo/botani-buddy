import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantaService } from './../plantanueva.service';
import { Plant } from './../models/plant.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {
  plantas: Plant[] = [];

  constructor(private router: Router, private plantaService: PlantaService, private alertController: AlertController) {}

  ngOnInit() {
    this.loadPlantas();
    console.log("Se inicio el OnInit");
  }

  loadPlantas() {
    const savedPlantas = JSON.parse(localStorage.getItem('plantas') || '[]');
    this.plantas = savedPlantas;
  }

  async confirmDeletePlanta(id: string) {
    console.log("Confirm delete for ID:", id);
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que quieres eliminar esta planta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deletePlanta(id);
          }
        }
      ]
    });

    await alert.present();
  }

  deletePlanta(id: string) {
    console.log("Deleting plant with ID:", id);
    this.plantas = this.plantas.filter(planta => planta.id !== id);
    localStorage.setItem('plantas', JSON.stringify(this.plantas));
    this.loadPlantas();
  }

  goToAnadir() {
    this.router.navigate(['/anadir']);
  }

  goToPlantasMias(planta: Plant) {
    this.router.navigate(['/plantas-mias', planta.id]);
  }
}
