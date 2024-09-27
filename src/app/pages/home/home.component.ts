import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Person } from 'src/app/core/interfaces/person';
import { Task } from 'src/app/core/interfaces/task';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { PersonService } from 'src/app/core/services/person.service';
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

  public displayHome: boolean = true;
  public fgTask: FormGroup = new FormGroup({});
  public task!: Task;
  public personList: Person[] = [];

  constructor(
    private dialogService: DialogService,
    private fb: FormBuilder,
    private personService: PersonService
  ){}

  validateCreate(): boolean{
    return !(this.fgTask.valid && this.personList.length > 0);
  }

  ngOnInit(): void {
    this.initFormTask();
  }

  initFormTask(){
    this.fgTask = this.fb.group({
      nameTask: new FormControl<string>('', [Validators.required]),
      dateLimit: new FormControl<Date | string>('', [Validators.required]),
    })
  }

  createTask(){
    this.displayHome = false
  }

  cancelTask(){
    this.displayHome = true
  }

  deployDialog(){
    this.dialogService.openDialog().afterClosed().subscribe(
      () => {
        if(this.personService.personGet.name != null && !this.personList.some(per => per.name === this.personService.personGet.name)){
          this.personList.push(this.personService.personGet)
          this.personService.personsSet = this.personList;
        }
      }
    );
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
      console.log(this.task)
      this.cancelTask();
    }
  }


}
