import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-todo-item',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {

}
