import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from 'src/app/shared/components/molecules/dialog/dialog.component';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private isDialogOpen = false;

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog() {
    return this.dialog.open(DialogComponent, {
      width: '32.25rem'
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
