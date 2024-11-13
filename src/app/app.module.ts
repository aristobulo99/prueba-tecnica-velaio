import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({
      animationType: 'none'
    })
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
