import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantasPage } from './plantas.page';

const routes: Routes = [
  {
    path: '',
    component: PlantasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasPageRoutingModule {}
