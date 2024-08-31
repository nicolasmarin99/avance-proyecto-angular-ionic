import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacioncambiarPage } from './confirmacioncambiar.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacioncambiarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacioncambiarPageRoutingModule {}
