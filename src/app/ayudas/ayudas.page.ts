import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ayudas',
  templateUrl: './ayudas.page.html',
  styleUrls: ['./ayudas.page.scss'],
})
export class AyudasPage implements OnInit {

  plantas = [
    {
      nombre: '8 Tips para tu Aloe Vera',
      descripcion: 'Buenos consejos para mantener tu plantita sana y bonita',
      imagen: 'assets/icon/alooo.jpg'
    },
    {
      nombre: '¿Cual deberia ser mi primera planta?',
      descripcion: 'A todos nos gustaria poseer una planta, pero a veces no sabemos por cual empezar, y si ya tienes una cual deberia seguir.',
      imagen: 'assets/icon/pensando.avif'
    },
    {
      nombre: '¿Que planta de PVZ eres según tu jardín de hogar?',
      descripcion: '¿Algúna vez te haz preguntado que planta de pvz serías según tu coleccion de plantas hogareñas?, yo tampoco',
      imagen: 'assets/icon/pvz.avif'
    }
  ];

  constructor(private router: Router) { }
  ngOnInit() {
  }

  goToAnadir(){
    this.router.navigate(['/home'])
  }
}
