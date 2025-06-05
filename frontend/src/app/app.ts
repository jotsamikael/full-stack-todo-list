import { Component, inject, model, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from './todobackendservice/services';
import { Task } from './todobackendservice/models/task';
import { CommonModule } from '@angular/common';
import { TodoItem } from './todo-item/todo-item';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddTodo } from './add-todo/add-todo';
import { UpdateTodo } from './update-todo/update-todo';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Guide } from './guide/guide';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    TodoItem,
    MatPaginator,
    MatTooltipModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
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
  readonly dialog = inject(MatDialog);
  readonly taskToUpdate = model('');

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
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
        //console.log(this.tasks)
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
        this.errorMsg = 'Failed to load tasks. Please try again.';
        this.isLoading = false;
      },
    });
  }

  /** Listen to pagination event */
  onPageChange($event: PageEvent) {
    const pageIndex = $event.pageIndex + 1;
    const pageSize = $event.pageSize;
    this.getAllTasks(pageIndex, pageSize);
  }

  /** Call delete task endpoint*/
  deleteTask(taskId: number) {
    this.taskService.taskDeleteIdDelete({ id: taskId }).subscribe({
      next: () => {
        //refresh data
        this.getAllTasks();
      },
      error: (error) => {
        console.error('Error Deleting tasks:', error);
        this.errorMsg = 'Failed to load tasks. Please try again.';
      },
    });
  }

  /** Open delete task alert */

  delete(taskId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.deleteTask(taskId);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  /** Open create task dialog */
  openCreatDialog() {
    const dialogRef = this.dialog.open(AddTodo, { width: '500px' });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.getAllTasks(); //reload tasks
    });
  }

  /** Open update task dialog */
  update(task: Task) {
    const dialogRef = this.dialog.open(UpdateTodo, {width:'500px',
      data: { task: task },
    });

    dialogRef.afterClosed().subscribe((result) => {
    //console.log(`Dialog result: ${result}`);
      this.getAllTasks(); //reload tasks
    });
  }

  openDoc() {
     this.dialog.open(Guide, {width:'500px', height:'400px'
    });
}
}
