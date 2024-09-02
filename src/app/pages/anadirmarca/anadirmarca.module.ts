import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirmarcaPageRoutingModule } from './anadirmarca-routing.module';

import { AnadirmarcaPage } from './anadirmarca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirmarcaPageRoutingModule
  ],
  declarations: [AnadirmarcaPage]
})
export class AnadirmarcaPageModule {}
