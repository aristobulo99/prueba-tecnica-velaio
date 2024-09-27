import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DialogComponent } from './shared/components/molecules/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControlPipe } from './shared/pipe/form-control.pipe';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
