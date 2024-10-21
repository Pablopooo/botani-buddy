import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerenualService {
  private apiUrl = 'https://perenual.com/api/species-list';
  private token = 'sk-A4b1671598d1ee0a97352'; // Reemplaza con tu token

  constructor(private http: HttpClient) {}

  getPlants(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}?key=${this.token}&page=${page}`);
  }

  getPlantDetails(plantId: string): Observable<any> {
    return this.http.get(`https://perenual.com/api/species/details/${plantId}?key=${this.token}`);
  }
}
