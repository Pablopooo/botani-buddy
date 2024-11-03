import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantDetailsPage } from './plant-details.page';

const routes: Routes = [
  {
    path: '',
    component: PlantDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantDetailsPageRoutingModule {}
