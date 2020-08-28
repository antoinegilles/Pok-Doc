import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoketailsPageRoutingModule } from './poketails-routing.module';

import { PoketailsPage } from './poketails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoketailsPageRoutingModule
  ],
  declarations: [PoketailsPage]
})
export class PoketailsPageModule {}
