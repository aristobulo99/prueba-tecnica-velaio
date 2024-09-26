import { Component } from '@angular/core';
import { InputComponent } from 'src/app/shared/components/atom/input/input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [InputComponent]
})
export class HomeComponent {

}
