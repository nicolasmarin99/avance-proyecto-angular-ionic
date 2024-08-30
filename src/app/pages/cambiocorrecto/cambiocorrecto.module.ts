import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiocorrectoPageRoutingModule } from './cambiocorrecto-routing.module';

import { CambiocorrectoPage } from './cambiocorrecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiocorrectoPageRoutingModule
  ],
  declarations: [CambiocorrectoPage]
})
export class CambiocorrectoPageModule {}
