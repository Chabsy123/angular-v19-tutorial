import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// executes the app component first
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
