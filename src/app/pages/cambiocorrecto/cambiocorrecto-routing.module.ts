import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiocorrectoPage } from './cambiocorrecto.page';

const routes: Routes = [
  {
    path: '',
    component: CambiocorrectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiocorrectoPageRoutingModule {}
