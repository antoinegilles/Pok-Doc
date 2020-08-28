import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoketailsPage } from './poketails.page';

const routes: Routes = [
  {
    path: ':lienPokemon',
    component: PoketailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoketailsPageRoutingModule {}
