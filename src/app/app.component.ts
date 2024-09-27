import { Component } from '@angular/core';
import { HeaderComponent } from "../app/shared/components/molecules/header/header.component";
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoadingService } from './core/services/loading.service';
import { NgxLoadingModule } from 'ngx-loading';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    RouterModule, 
    MatDialogModule,
    NgxLoadingModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tecnica-velaio';

  constructor(
    private loadingService: LoadingService
  ){}

  get activeLoading(){
    return this.loadingService.activeLoading;
  }
}
