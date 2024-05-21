import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { InfoProfileComponent } from './components/info-profile/info-profile.component';
import { OptionProfileComponent } from './components/option-profile/option-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    InfoProfileComponent,
    OptionProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
