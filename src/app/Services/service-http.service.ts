import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {Song} from "../model/song";


@Injectable({
  providedIn: 'root'
})

export class ServiceHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getSong(): Observable<Song[]> {
    const url = `${this.REST_API_SERVER}/songs`;
    return this.httpClient
      .get<Song[]>(url, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; Please try again later.');
  }
  musicSubject = new BehaviorSubject<any>([]);
}
