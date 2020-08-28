import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosAttaquePage } from './infos-attaque.page';

const routes: Routes = [
  {
    path: ':url',
    component: InfosAttaquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosAttaquePageRoutingModule {}
