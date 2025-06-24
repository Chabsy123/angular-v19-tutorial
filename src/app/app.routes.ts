import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

  // registering components
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'', component:HomeComponent},
  // **wild card route(checks whether it matched or not and gives the last one which should only be used as the last route when no other route matches )
  {path:'**', component:PageNotFoundComponent},
];
