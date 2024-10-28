import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasMiasPage } from './plantas-mias.page';

const routes: Routes = [
  {
    path: '',
    component: PlantasMiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasMiasPageRoutingModule {}
