import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks:any;

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getTasks().subscribe(response=>{
      console.log(response);
      this.tasks=response;
    });
  }
  eraseTask(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Esta seguro de eliminar esta tarea?")){
    this.apiService.eraseTask(id).subscribe((response)=>{
      this.tasks(iControl,1);
    });
  }
}
}
