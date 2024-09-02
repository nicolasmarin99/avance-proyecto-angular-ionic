import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirmarcaPage } from './anadirmarca.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirmarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirmarcaPageRoutingModule {}
