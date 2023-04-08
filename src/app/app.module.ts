import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {  HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/pagenotfound.component';
import { LocatieComponent } from './pages/locatie.component';
import { EvenementComponent } from './pages/evenement.component';
import { EvenementOverzichtComponent } from './pages/evenementoverzicht.component';

@NgModule({
  declarations: [
    AppComponent, StudentComponent, PageNotFoundComponent, LocatieComponent, EvenementComponent, EvenementOverzichtComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
