import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TaskService } from './todobackendservice/services';
import { Task } from './todobackendservice/models/task';
import { CommonModule } from '@angular/common';
import { TodoItem } from "./todo-item/todo-item";
import { MatPaginator, PageEvent } from "@angular/material/paginator";


@Component({
  selector: 'app-root',
  imports: [CommonModule, MatGridListModule, MatIconModule, MatDividerModule, MatButtonModule, TodoItem, MatPaginator],
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

getAllTasks(page: number = 1, limit: number = 5): void {
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

onPageChange($event: PageEvent) {
  const pageIndex = $event.pageIndex + 1; 
  const pageSize = $event.pageSize;
  this.getAllTasks(pageIndex, pageSize);
}
}