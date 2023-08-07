import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  private apiUrl= "http://localhost:8085/api/Admin";
  newAdmin(admin:Admin): Observable<Object>
  {
    return this.http.post("http://localhost:8085/api/Admin",admin);
  }

}
