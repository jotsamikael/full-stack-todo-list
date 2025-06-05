import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { Task } from '../todobackendservice/models';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  imports: [MatCardModule, MatButtonModule,DatePipe,MatIconModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {


@Input() item:Task | undefined; 
@Output() delete = new EventEmitter<number>();
@Output() update = new EventEmitter<Task>();


deleteTask(idTask: number|undefined) {
  this.delete.emit(idTask);
}

updateTask(task: Task) {
  this.update.emit(task);

}


}