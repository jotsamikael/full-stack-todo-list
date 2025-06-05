import { Component, Input } from '@angular/core';
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


deleteTask(arg0: number|undefined) {
}


}