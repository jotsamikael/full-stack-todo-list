import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TaskService } from './todobackendservice/services';
import { Task } from './todobackendservice/models/task';

@Component({
  selector: 'app-root',
  imports: [ MatGridListModule, MatIconModule, MatDividerModule,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'frontend';
  task: Task | undefined;
  tasks: Task[] = [];
    totalTasks = 0;
limit = 10;
page = 1;
  isLoading: boolean = false;
  errorMsg: string = ''; 

  constructor(private taskService: TaskService){

  }
  ngOnInit(): void {
    this.getAllTasks()


}

getAllTasks(page: number = 1, limit: number = 10): void {
  this.isLoading = true;
  this.errorMsg = '';
  this.limit = limit;
  this.page = page;

  this.taskService.taskGetAllGet({ page, limit }).subscribe({
     next: (response: any) => {
      this.tasks = response.rows;
      this.totalTasks = response.count;
      this.isLoading = false;
      console.log(this.tasks)
    },
    error: (error) => {
      console.error('Error fetching tasks:', error);
      this.errorMsg = 'Failed to load tasks. Please try again.';
      this.isLoading = false;
    }
  });
}

}