import { Component } from '@angular/core';


interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  editTask(task: Task) {
    const updatedTitle = prompt('Edit task:', task.name);
      if (updatedTitle !== null && updatedTitle.trim() !== '') {
        task.name = updatedTitle;
      }
  }

  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }
}
