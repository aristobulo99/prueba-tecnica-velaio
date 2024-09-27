import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  standalone: true,
})
export class RadioButtonComponent {

  @Input() isSelected: boolean = false;
  @Output() selectButton: EventEmitter<boolean> = new EventEmitter();

  toggleSelection() {
    this.isSelected = !this.isSelected;
    this.selectButton.emit(this.isSelected)
  }

}
