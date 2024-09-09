import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Principal', url: '/home', icon: 'home' },
    { title: 'Mis Plantas', url: '/plantas', icon: 'flower' },
    { title: 'Añadir Planta', url: '/anadir', icon: 'leaf' },
    { title: 'Ayudas prácticas', url: '/ayudas', icon: 'help' },
  ];
  constructor() {}
}
