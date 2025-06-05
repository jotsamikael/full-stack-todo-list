import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private fb: FormBuilder) {}

    taskForm(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required,Validators.maxLength(100)]],
      title: ['', [Validators.required,Validators.maxLength(500)]],
      
    });
  }
}
