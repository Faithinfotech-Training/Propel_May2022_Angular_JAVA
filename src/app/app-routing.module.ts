import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [

  { path: '', component : LoginComponent },
  { path: 'app-doctor', component : DoctorComponent }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
