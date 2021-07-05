import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import {MovieListComponent} from './main/movie-list/movie-list.component';
import {MovieDetailsComponent} from './main/movie-details/movie-details.component';
import {MovieFormComponent} from './main/movie-form/movie-form.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'list', component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
