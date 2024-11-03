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
  cache: Map<string, Plant[]> = new Map(); // Cache para resultados de búsqueda

  constructor(
    private perenualService: PerenualService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPlants();
  }

  loadPlants(event?: any) {
    this.perenualService.getPlants(this.page).subscribe(data => {
      const newPlants = data.data.map((plant: Plant) => ({
        ...plant,
        image_url: plant.image_url ? plant.image_url : 'assets/placeholder.png'
      }));
      this.plants = [...this.plants, ...newPlants];
      this.filteredPlants = [...this.plants];
      if (event) {
        event.target.complete();
      }
      this.page++;
    }, (error: any) => {
      if (error.status === 429) {
        const retryAfter = parseInt(error.headers.get('Retry-After') || '1', 10) * 1000;
        setTimeout(() => this.loadPlants(event), retryAfter);
      }
    });
  }

  filterPlants() {
    if (this.searchTerm.trim() === '') {
      this.filteredPlants = this.plants;
      return;
    }
    if (this.cache.has(this.searchTerm)) {
      this.filteredPlants = this.cache.get(this.searchTerm) || [];
      return;
    }
    this.perenualService.searchPlants(this.searchTerm).subscribe(data => {
      const results = data.data.map((plant: Plant) => ({
        ...plant,
        image_url: plant.image_url ? plant.image_url : 'assets/placeholder.png'
      }));
      this.cache.set(this.searchTerm, results);
      this.filteredPlants = results;
    }, (error: any) => {
      if (error.status === 429) {
        const retryAfter = parseInt(error.headers.get('Retry-After') || '1', 10) * 1000;
        setTimeout(() => this.filterPlants(), retryAfter);
      }
    });
  }

  showDetails(plantId: string) {
    this.router.navigate(['/plant-details', plantId]);
  }
}
