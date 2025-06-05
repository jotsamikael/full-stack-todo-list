import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TodoItem } from '../todo-item/todo-item';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-guide',
 imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonModule, 
    MatDialogModule
  ],  templateUrl: './guide.html',
  styleUrl: './guide.scss'
})
export class Guide {

}
