import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const appRoutes: Routes = [ 
  {path: 'home', component: HomeComponent},
  {path: 'movie-list', component: MovieListComponent
  //{path: 'SignUp', component: 
  
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
