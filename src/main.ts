import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RoutesRecognized } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { ROOT_REDUCERS } from './app/store/app.state';
import { TaksEffects } from './app/store/effects/tasks.effects';


bootstrapApplication(AppComponent,
  {
    providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideToastr({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }),
    provideStore(ROOT_REDUCERS),
    provideEffects([TaksEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
  }
).catch(err => console.error(err));
