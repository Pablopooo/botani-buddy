import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Plantas', url: '/folder/Plantas', icon: 'leaf' },
    { title: 'Horario', url: '/folder/Horario', icon: 'time' },
    { title: 'Ayudas', url: '/folder/Ayudas', icon: 'help' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
