import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TaskService } from '../todobackendservice/services/task.service';
import { FormBuilderService } from '../todobackendservice/services/form-builder';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-todo',
  imports: [CommonModule,MatFormFieldModule,MatProgressSpinnerModule, MatInputModule, MatSelectModule,ReactiveFormsModule,MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.scss'
})
export class AddTodo implements OnInit{

createForm!: FormGroup; 
 processing:boolean =  false;
  readonly dialogRef = inject(MatDialogRef<AddTodo>);
  errorMsg: string = '';


 constructor(private formService: FormBuilderService,private taskService: TaskService){

 }
  ngOnInit(): void {
  this.createForm = this.formService.taskForm()

  }
  get f() {
  return this.createForm.controls;

}

createTask() {
this.taskService.taskCreatePost({
  body: {
    title: this.createForm.value.title,
    description: this.createForm.value.description
  }
}).subscribe({
  next: () => {
    this.dialogRef.close(true);
    this.processing = false;
    Swal.fire('Created!', 'Task created successfully!', 'success');

  },
  error: (error) => {
    console.error('Error creating task:', error);
    this.errorMsg = 'Failed to create task.';
    this.processing = false;
    Swal.fire('Error!', `Error: ${error}`, 'error');

  }
});

}

}
