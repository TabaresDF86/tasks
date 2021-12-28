import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tasks } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:string = "/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direction = this.apiUrl + "login";
    return this.http.post<ResponseI>(direction, form);
  }

  addTasks(dataTasks:tasks):Observable<any>{
      return this.http.post(this.apiUrl,dataTasks);
  }

  getTasks(){
    return this.http.get(this.apiUrl);
  }

  eraseTask(id:any):Observable<any>{
    return this.http.delete(this.apiUrl+id);
  }

  getTask(id:any):Observable<any>{
    return this.http.get(this.apiUrl+id);
  }

  editTasks(id:any,dataTasks:any):Observable<any>{
    return this.http.put(this.apiUrl+id,dataTasks);
}
}
