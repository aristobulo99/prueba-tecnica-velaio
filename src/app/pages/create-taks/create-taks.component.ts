import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/core/interfaces/person';
import { Task } from 'src/app/core/interfaces/task';
import { DialogService } from 'src/app/core/services/dialog.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PersonService } from 'src/app/core/services/person.service';
import { TaskService } from 'src/app/core/services/task/task.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { ButtonComponent } from 'src/app/shared/components/atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/atom/input/input.component';
import { TableComponent } from 'src/app/shared/components/molecules/table/table.component';
import { FormControlPipe } from 'src/app/shared/pipe/form-control.pipe';

@Component({
  selector: 'app-create-taks',
  templateUrl: './create-taks.component.html',
  styleUrls: ['./create-taks.component.scss'],
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    InputComponent, 
    ButtonComponent, 
    TableComponent,
    NgClass,
    FormControlPipe
  ],
  providers: [DialogService]
})
export class CreateTaksComponent {

  public fgTask: FormGroup = new FormGroup({});
  public task!: Task;
  public personList: Person[] = [];

  constructor(
    private dialogService: DialogService,
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private headerService: HeaderService,
    private loadingService: LoadingService,
    private taskService: TaskService,
    private toastService: ToastService
  ){}

  ngOnInit(): void {
    this.headerService.titleHeaderSet = 'Crear nueva tarea';
    this.initFormTask();
    setTimeout(
      () => {
        this.loadingService.activeLoading = false;
      }, 1000
    )
  }

  initFormTask(){
    this.fgTask = this.fb.group({
      nameTask: new FormControl<string>('', [Validators.required]),
      dateLimit: new FormControl<Date | string>('', [Validators.required]),
    })
  }

  validateCreate(): boolean{
    return !(this.fgTask.valid && this.personList.length > 0);
  }

  deployDialog(){
    try{
      this.dialogService.openDialog().afterClosed().subscribe(
        () => {
          if(this.personService.personGet.name != null && !this.personList.some(per => per.name === this.personService.personGet.name)){
            this.personList.push(this.personService.personGet)
            this.personService.personsSet = this.personList;
          }
        }
      );
    }catch(e){
      console.log(e)
    }
    
  }

  validateNameTask(): boolean{
    return (this.fgTask.get('nameTask')?.valid || this.fgTask.get('nameTask')?.untouched) as boolean
  }

  validateDateLimit(): boolean{
    return (this.fgTask.get('dateLimit')?.valid || this.fgTask.get('dateLimit')?.untouched) as boolean
  }

  postTask(){
    console.log(this.fgTask.valid, this.personList.length > 0)
    if(this.fgTask.valid && this.personList.length > 0){
      this.task = {
        nameTask: this.fgTask.get('nameTask')?.value,
        dateLimit: this.fgTask.get('dateLimit')?.value,
        completed: false,
        persons: this.personList
      }
      try{
        this.taskService.postTask(this.task);
        this.toastService.showSuccess('Tarea creada exitosamente');
        this.cancelTask();
      }catch(e){
        console.error(e);
      }
    }
  }

  cancelTask() {
    this.headerService.titleHeaderSet = 'Gestión de tareas';
    this.router.navigate(['home']);
  }

  

}
