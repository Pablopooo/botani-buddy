import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PlantasMiasPageRoutingModule } from './plantas-mias-routing.module';

import { PlantasMiasPage } from './plantas-mias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasMiasPageRoutingModule
  ],
  declarations: [PlantasMiasPage]
})
export class PlantasMiasPageModule {}
