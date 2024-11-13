import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { InputComponent } from '../../atom/input/input.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlPipe } from 'src/app/shared/pipe/form-control.pipe';
import { ButtonComponent } from '../../atom/button/button.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Person } from 'src/app/core/interfaces/person';
import { PersonService } from 'src/app/core/services/person.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [InputComponent, FormsModule, ReactiveFormsModule, FormControlPipe, ButtonComponent, NgClass, NgFor, NgIf]
})
export class DialogComponent implements OnInit {

  public fgPerson: FormGroup = new FormGroup({});
  public formControlSkill: FormControl = new FormControl<string>('', [Validators.required])
  public person!: Person;
  public skillList: string[] = [];

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef,
    private fb: FormBuilder,
    private personService: PersonService
  ){}

  ngOnInit(): void {
    this.initFormPerson();
  }

  initFormPerson(){
    this.fgPerson = this.fb.group({
      namePerson: new FormControl<string>('', [Validators.required]),
      age: new FormControl<number | null>(null, [Validators.required, this.ageValidator]),
      skills: new FormControl<string[]>([], [Validators.required,this.skillsValidator])
    })
  }

  ageValidator(control: AbstractControl) {
    const age = control.value;
    return age >= 18 || age == null ? null : { ageInvalid: true };
  }

  skillsValidator(control: AbstractControl){
    const skills = control.value as string[];
    return skills.length > 0 ? null : {skillsInvalid: true}
  }

  get validSkillVal(){
    return (this.formControlSkill.valid || this.formControlSkill.untouched)
  }

  validInput(value: string): boolean{
    return (this.fgPerson.get(value)?.valid || this.fgPerson.get(value)?.untouched) as boolean;
  }

  addSkill(){
    const value = this.formControlSkill.value;
  
    if(value != '' && !this.skillList.includes((value as string).toUpperCase())){
      this.skillList.push((value as string).toLowerCase())
      this.fgPerson.get('skills')?.setValue(this.skillList);
    }
    this.formControlSkill.setValue('');
  }

  deleteSkill(index: number){
    this.skillList.splice(index, 1)
  }

  invalifForm(){
    return this.fgPerson.invalid || this.skillList.length === 0;
  }

  createPerson(){
    const personNameNotRepet = !this.personService.personsGet.some(
      per => {
        return per.name.toLowerCase() === (this.fgPerson.get('namePerson')?.value as string).toLowerCase()
      }
    );
    console.log(this.fgPerson.valid, personNameNotRepet)
    if(this.fgPerson.valid && personNameNotRepet){
      this.person = {
        name: this.fgPerson.get('namePerson')?.value,
        age: this.fgPerson.get('age')?.value,
        skills: this.fgPerson.get('skills')?.value,
      }
      this.personService.personSet = this.person;
      this.dialogRef.close();
      this.resetFgPerson();
    }else{
      this.fgPerson.markAllAsTouched();
      this.resetFgPerson();
    }
  }

  resetFgPerson(){
    this.fgPerson.get('namePerson')?.setValue('');
    this.fgPerson.get('age')?.setValue(null);
    this.fgPerson.get('skills')?.setValue([]);
    this.skillList = [];
  }


}
