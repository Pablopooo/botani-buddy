import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerenualService {
  private apiUrl = 'https://perenual.com/api/species-list';
  private token = 'sk-FKcS671641fa55f797360'; // Reemplaza con tu token

  constructor(private http: HttpClient) {}

  getPlants(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}?key=${this.token}&page=${page}`);
  }

  searchPlants(searchTerm: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?key=${this.token}&q=${searchTerm}`);
  }

  getPlantDetails(plantId: string): Observable<any> {
    return this.http.get(`https://perenual.com/api/species/details/${plantId}?key=${this.token}`);
  }
}
