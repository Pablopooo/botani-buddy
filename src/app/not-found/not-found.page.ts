import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
    this.menuCtrl.enable(false); // Deshabilitar el menú
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true); // Habilitar el menú al salir de la página de error
  }

  goHome() {
    this.navCtrl.navigateRoot('/home'); // Navegar a la página principal
  }
}
