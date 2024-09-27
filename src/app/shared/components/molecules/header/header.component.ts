import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private headerService: HeaderService
  ){}

  get titleHeader(){
    return this.headerService.titleHeaderGet;
  }

}
