import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  apiURL = "http://localhost:5000/items" //found at db.json at the root of the project folder

  constructor(private http: HttpClient) { }

  getItems(): Observable<item[]>{
    return this.http.get<item[]>(this.apiURL)
  }

}
