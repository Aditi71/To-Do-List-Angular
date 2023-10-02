import { Component } from '@angular/core';
import { Task } from 'src/task.model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  completedTasks: Task[] = [];

  onTaskCompleted(task: Task) {
    this.completedTasks.push(task);
  }
}
