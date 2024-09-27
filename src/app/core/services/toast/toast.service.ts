import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastrService: ToastrService
  ) { }

  showSuccess(value: string) {
    this.toastrService.success(value, '', {
      positionClass: 'toast-top-right', 
      timeOut: 30000,              
      progressBar: true
    });
  }
}
