import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private plantas: any[] = [
    
  ];

  getPlantas() {
    return this.plantas;
  }

  addPlanta(planta: any) {
    this.plantas.push(planta);
  }
}