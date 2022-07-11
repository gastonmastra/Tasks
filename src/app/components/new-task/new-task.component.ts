import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.maxLength(250)]],
      date: [new Date()]
    });
  }

  ngOnInit(): void {
  }

  get Name(){
    return this.form.get('name');
  }

  get Description(){
    return this.form.get('description');
  }

  get Date(){
    return this.form.get('date');
  }

}
