import { RegistrarComponent } from './componets/registrar/registrar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './componets/home/home.component';
import { CheckInComponent } from './componets/check-in/check-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    CheckInComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
