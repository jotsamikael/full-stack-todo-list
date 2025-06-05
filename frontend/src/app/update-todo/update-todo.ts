import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { AddTodo } from '../add-todo/add-todo';
import { TaskService } from '../todobackendservice/services';
import { FormBuilderService } from '../todobackendservice/services/form-builder';
import { Task } from '../todobackendservice/models';

 export interface DialogData {
  taskToUpdate: Task;
 
}
@Component({
  selector: 'app-update-todo',
  imports: [CommonModule,MatFormFieldModule,MatProgressSpinnerModule, MatInputModule, MatSelectModule,ReactiveFormsModule,MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update-todo.html',
  styleUrl: './update-todo.scss'
})
export class UpdateTodo {

updateForm!: FormGroup; 
 processing:boolean =  false;
  readonly dialogRef = inject(MatDialogRef<AddTodo>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  errorMsg: string = '';


 constructor(private formService: FormBuilderService,private taskService: TaskService){

 }
  ngOnInit(): void {
  this.updateForm = this.formService.taskForm()

  }
  get f() {
  return this.updateForm.controls;

}

createTask() {
this.taskService.taskCreatePost({
  body: {
    title: this.updateForm.value.title,
    description: this.updateForm.value.description
  }
}).subscribe({
  next: () => {
    this.dialogRef.close(true);
    this.processing = false;

  },
  error: (error) => {
    console.error('Error creating task:', error);
    this.errorMsg = 'Failed to create task.';
    this.processing = false;
  }
});

}

}
