import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeostartstopPageRoutingModule } from './geostartstop-routing.module';

import { GeostartstopPage } from './geostartstop.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeostartstopPageRoutingModule

  ],
  declarations: [GeostartstopPage]
})
export class GeostartstopPageModule {}
