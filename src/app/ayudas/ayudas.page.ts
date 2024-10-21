import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerenualService } from '../perenual.service';
import { Plant } from '../models/plant.model';

@Component({
  selector: 'app-ayudas',
  templateUrl: './ayudas.page.html',
  styleUrls: ['./ayudas.page.scss'],
})
export class AyudasPage implements OnInit {
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];
  searchTerm: string = '';
  page: number = 1;
  selectedPlant: Plant | null = null;

  constructor(
    private perenualService: PerenualService,
    private router: Router // Inyectar el servicio de enrutamiento
  ) {}

  ngOnInit() {
    this.loadPlants();
  }

  loadPlants(event?: any) {
    this.perenualService.getPlants(this.page).subscribe(data => {
      const newPlants = data.data.map((plant: Plant) => ({
        ...plant,
        image_url: plant.default_image ? plant.default_image.thumbnail : 'assets/placeholder.png'
      }));
      this.plants = [...this.plants, ...newPlants];
      this.filteredPlants = [...this.plants];

      if (event) {
        event.target.complete();
      }

      this.page++;
    });
  }

  filterPlants() {
    if (this.searchTerm.trim() === '') {
      this.filteredPlants = this.plants;
      return;
    }
    
    this.perenualService.searchPlants(this.searchTerm).subscribe(data => {
      this.filteredPlants = data.data.map((plant: Plant) => ({
        ...plant,
        image_url: plant.default_image ? plant.default_image.thumbnail : 'assets/placeholder.png'
      }));
    });
  }

  showDetails(plantId: string) {
    this.router.navigate(['/plant-details', plantId]); // Usar el servicio de enrutamiento
  }
}
