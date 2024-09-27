import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _titleHeader: string = 'Gestión de tareas';

  constructor() { }

  get titleHeaderGet(){
    return this._titleHeader;
  }

  set titleHeaderSet(title: string){
    this._titleHeader = title;
  }
}
