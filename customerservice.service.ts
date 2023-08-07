import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }

  private apiUrl= "http://localhost:8085/api/Admin";
  newAdmin(customer:Customer): Observable<Object>
  {
    return this.http.post(`$.{api.url}`,customer);
  }

}
