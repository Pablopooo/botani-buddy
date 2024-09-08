import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Principal', url: '/home', icon: 'home' },
    { title: 'Añadir Planta', url: '/anadir', icon: 'leaf' },
  ];
  constructor() {}
}
