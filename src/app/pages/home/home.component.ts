import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/interfaces/person';
import { Task } from 'src/app/core/interfaces/task';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PersonService } from 'src/app/core/services/person.service';
import { TaskService } from 'src/app/core/services/task/task.service';
import { ButtonComponent } from 'src/app/shared/components/atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/atom/input/input.component';
import { SelectComponent } from 'src/app/shared/components/atom/select/select.component';
import { DialogComponent } from 'src/app/shared/components/molecules/dialog/dialog.component';
import { TableComponent } from 'src/app/shared/components/molecules/table/table.component';
import { FormControlPipe } from 'src/app/shared/pipe/form-control.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    InputComponent, 
    SelectComponent, 
    ButtonComponent, 
    MatDialogModule, 
    NgIf, 
    NgClass,
    FormsModule, 
    ReactiveFormsModule, 
    FormControlPipe,
    TableComponent],
  providers: [DialogService]
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private taskService: TaskService
  ){}

  async ngOnInit() {
      const resp = await this.taskService.getAllTask();
      console.log(resp);
  }

  createTask(){
    this.loadingService.activeLoading = true;
    this.router.navigate(['create-task']);
  
  }

}
