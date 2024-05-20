import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { MatchComponent } from './components/match/match.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InfoPersonComponent } from './components/info-person/info-person.component';



@NgModule({
  declarations: [
    HomeComponent,
    MatchComponent,
    InfoPersonComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
