import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from '../profile/profile.component';

export const routes: Routes = [
  // Registering components with their paths
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },

  // Dynamic route with parameters: /user/:id/:name
  { path: 'user/:id/:name', component: UserComponent },
  // Route configuration for the Profile component
// Includes optional static data that can be retrieved via ActivatedRoute.data
{
  path: 'profile', 
  component: ProfileComponent, 
  data: { name: 'Anil Seth' }  // This 'name' value is passed as static route data

},



  // Wildcard route for 404 page
  // Should always be the last route
  { path: '**', component: PageNotFoundComponent }
];

