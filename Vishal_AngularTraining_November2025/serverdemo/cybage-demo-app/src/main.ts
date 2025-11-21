import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AboutUsComponent } from './app/about-us/about-us.component';

// bootstrapApplication(AppComponent, appConfig)
bootstrapApplication(AboutUsComponent, appConfig)
  .catch((err) => console.error(err));
