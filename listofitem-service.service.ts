import { Injectable } from '@angular/core';
import { Listofitems } from './listofitems';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListofitemServiceService {
  constructor(private http:HttpClient) { }

  private apiUrl= "http://localhost:8085/api/Listofitems";
  
  getallListofitems(): Observable<Listofitems[]>
  {
    return this.http.get<Listofitems[]>(`${this.apiUrl}`);
  }


  newitem(listofitems:Listofitems): Observable<Object>
  {
    return this.http.post("http://localhost:8085/api/Listofitems",listofitems);
  }
  getlistofitems(itemname:String):Observable<Object>
  {
    return this.http.get<Listofitems[]>(`${this.apiUrl}`);
  }

deletelistofitems(itemname:String):Observable<Object>
{
  return this.http.delete(`"http://localhost:8085/api/Listofitems"/${itemname}`);
}


}
