import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Task } from '../../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = 'http://localhost:3000/task';

  constructor(
    private http: HttpClient
  ) { }

  async getAllTask(){
    return await lastValueFrom(
      this.http.get(this.url)
    );
  }

  async postTask(task: Task){
    return await lastValueFrom(
      this.http.post(this.url, task)
    )
  }
}
