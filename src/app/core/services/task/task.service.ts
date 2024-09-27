import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Task, TaskData } from '../../interfaces/task';

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
      this.http.get<TaskData[]>(this.url)
    );
  }

  async getByCompleted(completed: boolean){
    return await lastValueFrom(
      this.http.get<TaskData[]>(`${this.url}/?completed=${completed}`)
    )
  }

  async postTask(task: Task){
    return await lastValueFrom(
      this.http.post(this.url, task)
    )
  }

  async patchTask(id: string, completed: boolean){
    return await lastValueFrom(
      this.http.patch(`${this.url}/${id}`,{completed})
    )
  }

}
