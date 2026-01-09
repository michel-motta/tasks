import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: Task[] = [];

  public getTasks(): Task[] {
    return this.tasks;
  }

  public addTask() {

  }

  public deleteTask() {

  }

  public updateTask() {

  }
}

interface Task {
  value: string;
  date: Date;
  done?: boolean;
}
