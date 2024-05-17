import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiginRoutingModule } from './sigin-routing.module';
import { SiginComponent } from './pages/sigin/sigin.component';


@NgModule({
  declarations: [
    SiginComponent
  ],
  imports: [
    CommonModule,
    SiginRoutingModule
  ]
})
export class SiginModule { }
