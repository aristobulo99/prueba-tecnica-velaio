import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/components/atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/atom/input/input.component';
import { SelectComponent } from 'src/app/shared/components/atom/select/select.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [InputComponent, SelectComponent, ButtonComponent]
})
export class HomeComponent {

}
