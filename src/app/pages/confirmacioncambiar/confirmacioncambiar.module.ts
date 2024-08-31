import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacioncambiarPageRoutingModule } from './confirmacioncambiar-routing.module';

import { ConfirmacioncambiarPage } from './confirmacioncambiar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacioncambiarPageRoutingModule
  ],
  declarations: [ConfirmacioncambiarPage]
})
export class ConfirmacioncambiarPageModule {}
