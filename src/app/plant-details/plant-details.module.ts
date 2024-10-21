import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlantDetailsPageRoutingModule } from './plant-details-routing.module';
import { PlantDetailsPage } from './plant-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantDetailsPageRoutingModule
  ],
  declarations: [PlantDetailsPage]
})
export class PlantDetailsPageModule {}
