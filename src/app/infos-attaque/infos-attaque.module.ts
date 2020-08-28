import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosAttaquePageRoutingModule } from './infos-attaque-routing.module';

import { InfosAttaquePage } from './infos-attaque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosAttaquePageRoutingModule
  ],
  declarations: [InfosAttaquePage]
})
export class InfosAttaquePageModule {}
