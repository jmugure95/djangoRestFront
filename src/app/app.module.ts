import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { MovieFormComponent } from './main/movie-form/movie-form.component';
import { MovieListComponent } from './main/movie-list/movie-list.component';
import { ApiService } from './api.service';
import { IncidenceService} from './incidence.service';
import {CountyShpService} from './county-shp.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    MovieDetailsComponent,
    MovieFormComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    IncidenceService,
    CountyShpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
