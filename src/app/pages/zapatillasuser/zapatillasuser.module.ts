import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZapatillasuserPageRoutingModule } from './zapatillasuser-routing.module';

import { ZapatillasuserPage } from './zapatillasuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZapatillasuserPageRoutingModule
  ],
  declarations: [ZapatillasuserPage]
})
export class ZapatillasuserPageModule {}
