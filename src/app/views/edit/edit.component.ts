import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formTasks:FormGroup;
  byId:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    public form:FormBuilder,
    private apiService:ApiService,
    private routes:Router
  ) {
    this.byId=this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getTask(this.byId).subscribe(
      response=>{
        console.log(response);
        this.formTasks.setValue({
          name_task:response[0]['name_task'],
          description:response[0]['description'],
          dateEnding:response[0]['date_ending'],
          status:response[0]['task_condition']
        });

      }
    );
    this.formTasks=this.form.group(
      {
      name:[''],
      description:[''],
      dateEnding:[''],
      status:['']
      }
    );
   }

  ngOnInit(): void {
  }
  sendData():any{
    console.log(this.byId);
    console.log(this.formTasks.value);
    this.apiService.editTasks(this.byId,this.formTasks.value).subscribe(()=>{
      this.routes.navigateByUrl('/list');
    });
  }
}
