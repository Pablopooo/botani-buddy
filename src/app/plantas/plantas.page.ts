import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantaService } from './../plantanueva.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {
  plantas: any[] = [];

  constructor(private router: Router, private plantaService: PlantaService) { }

  ngOnInit() {
    this.plantas = this.plantaService.getPlantas();
  }

  goToAnadir(){
    this.router.navigate(['/anadir']);
  }
}