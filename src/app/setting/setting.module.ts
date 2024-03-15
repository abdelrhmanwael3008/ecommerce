import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ForgetpasswordComponent } from './forgetpasswordd/forgetpasswordd.component';


@NgModule({
  declarations: [
    UpdatepasswordComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
