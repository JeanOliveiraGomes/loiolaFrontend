import { CheckInComponent } from './componets/check-in/check-in.component';
import { HomeComponent } from './componets/home/home.component';
import { RegistrarComponent } from './componets/registrar/registrar.component';
import { LoginComponent } from './componets/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'checkin', component: CheckInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
