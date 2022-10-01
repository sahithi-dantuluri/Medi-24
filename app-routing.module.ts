import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import { DoctorComponent } from './doctor/doctor.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'doctor',component:DoctorComponent},
  {path: 'pharmacy' , component:PharmacyComponent},
  {path:'signup' , component:SignupComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[DoctorComponent,SignupComponent,PharmacyComponent,ContactComponent]
