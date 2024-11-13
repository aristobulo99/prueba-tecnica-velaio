import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Person } from 'src/app/core/interfaces/person';
import { Task, TaskData } from 'src/app/core/interfaces/task';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PersonService } from 'src/app/core/services/person.service';
import { TaskService } from 'src/app/core/services/task/task.service';
import { ButtonComponent } from 'src/app/shared/components/atom/button/button.component';
import { InputComponent } from 'src/app/shared/components/atom/input/input.component';
import { SelectComponent } from 'src/app/shared/components/atom/select/select.component';
import { CardTaskComponent } from 'src/app/shared/components/molecules/card-task/card-task.component';
import { DialogComponent } from 'src/app/shared/components/molecules/dialog/dialog.component';
import { TableComponent } from 'src/app/shared/components/molecules/table/table.component';
import { FormControlPipe } from 'src/app/shared/pipe/form-control.pipe';
import { getAllTaskRequest, getTaskCompleteRequest, patchTaskCompleteRequest } from 'src/app/store/action/tasks.actions';
import { AppState } from 'src/app/store/app.state';
import { selectorTask } from 'src/app/store/selectors/tasks.selectors';

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
    NgFor,
    NgClass,
    FormsModule, 
    ReactiveFormsModule, 
    FormControlPipe,
    TableComponent,
    CardTaskComponent
  ],
  providers: [DialogService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public filterList: string[] = [
    'Todas', 
    'Completadas',
    'Pendientes'
  ]
  public filterOptionSelect: string = 'Todas';
  public taskList: TaskData[] = [];
  public unsubscribe$: Subject<void> = new Subject<void>();
  
  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private taskService: TaskService,
    private store: Store<AppState>
  ){}

  ngOnInit() {
      this.getAllTask();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAllTask(){
    this.store.dispatch(getAllTaskRequest());

    this.store.select(selectorTask)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(tasks => this.taskList = [...tasks])
  }

  async getByCompletedTask(value: boolean){
    this.store.dispatch(getTaskCompleteRequest({complete: value}));
  }

  createTask(){
    this.loadingService.activeLoading = true;
    this.router.navigate(['create-task']);
  
  }

  selectFilter($event: string) {
    this.loadingService.activeLoading = true;
    setTimeout(
      () => {
        switch($event){
          case 'Todas':
            this.store.dispatch(getAllTaskRequest());
            break;
          case 'Completadas':
            this.getByCompletedTask(true);
            break;
          case 'Pendientes':
            this.getByCompletedTask(false);
            break;
          default:
            this.store.dispatch(getAllTaskRequest());
            break;
        }
        this.filterOptionSelect = $event;
        this.loadingService.activeLoading = false;
      }, 1000
    )
  }

  updateStatus(value: {id: string, completed: boolean}){
    this.store.dispatch(patchTaskCompleteRequest({patchTask: {id: value.id, completed: value.completed}}))
    this.selectFilter(this.filterOptionSelect);
  }

}
