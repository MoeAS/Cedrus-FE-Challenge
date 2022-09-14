import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { item } from '../item';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  apiURL = environment.apiURL; //found at db.json at the root of the project folder, run "npm run server"

  error_bool: boolean = false;

  constructor(private http: HttpClient) { console.log(environment.env)}

  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = "An error occured at the server \n \n" + `Error Code: ${error.status}\n\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getItems(): Observable<item[]>{
    return this.http.get<item[]>(this.apiURL).pipe(catchError(this.handleError));
  }

}