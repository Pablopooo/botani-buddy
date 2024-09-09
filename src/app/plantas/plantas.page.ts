import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {

  plantas = [
    {
      nombre: 'Mauricio',
      descripcion: 'Mi linda plantita llamada Mauricio',
      imagen: 'assets/icon/mauricio.webp'
    },
    {
      nombre: 'Aloe Verita',
      descripcion: 'Mi plantita de Aloe Vera pa las quemaduras',
      imagen: 'assets/icon/aloe.webp'
    },
    {
      nombre: 'Tulipancito',
      descripcion: 'Nunca mires a un tulipan a los ojos',
      imagen: 'assets/icon/tuli.jpg'
    }
  ];

  constructor(private router: Router) { }
  ngOnInit() {
  }

  goToAnadir(){
    this.router.navigate(['/anadir'])
  }
  
}
