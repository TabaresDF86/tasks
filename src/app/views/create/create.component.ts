import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formTasks:FormGroup;

  model: any;

  constructor(
    public form:FormBuilder,
    private apiService:ApiService,
    private routes:Router
    ) {

    this.formTasks=this.form.group({
      name_task:[''],
      description:[''],
      dateBegin:[''],
      dateEnding:[''],
      status:['']
    });

   }

  ngOnInit(): void {
  }

  sendData():any {
    console.log("me presionaste");
    console.log(this.formTasks.value);
    this.apiService.addTasks(this.formTasks.value).subscribe(response=>{
      this.routes.navigateByUrl('/list');
     
    });
  }
}
