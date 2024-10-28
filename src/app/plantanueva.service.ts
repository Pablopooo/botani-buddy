import { Injectable } from '@angular/core';
import { Plant } from './models/plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private plantas: Plant[] = [];

  getPlantas(): Plant[] {
    return this.plantas;
  }

  addPlanta(planta: Plant) {
    this.plantas.push(planta);
  }

  getPlantaById(id: string): Plant | undefined {
    return this.plantas.find(planta => planta.id === id);
  }
}
