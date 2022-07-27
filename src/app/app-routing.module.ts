import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'}, 
  {path: 'home', component: HomeComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [IsAuthenticatedGuard, AuthGuard], data:{role:'Admin'}}, 

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
