import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerenualService } from '../perenual.service';
import { Plant } from '../models/plant.model';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.page.html',
  styleUrls: ['./plant-details.page.scss'],
})
export class PlantDetailsPage implements OnInit {
  plant: Plant | null = null;

  constructor(private route: ActivatedRoute, private perenualService: PerenualService) {}

  ngOnInit() {
    const plantId = this.route.snapshot.paramMap.get('id');
    if (plantId) {
      this.perenualService.getPlantDetails(plantId).subscribe(data => {
        console.log('Respuesta de la API:', data); // Añadir esta línea para inspeccionar la respuesta
        this.plant = {
          ...data,
          image_url: data.default_image ? data.default_image.thumbnail : 'assets/placeholder.png'
        };
      }, error => {
        console.error('Error al obtener detalles de la planta:', error);
      });
    }
  }
}
