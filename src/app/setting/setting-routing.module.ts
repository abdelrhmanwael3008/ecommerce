import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ForgetpasswordComponent } from './forgetpasswordd/forgetpasswordd.component';

const routes: Routes = [
  {path:"" , redirectTo:"udpate" , pathMatch:"full"},
  {path: "update" , component:UpdatepasswordComponent},
  {path: "forget" , component:ForgetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
