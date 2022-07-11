import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent
  
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
