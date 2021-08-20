import { Injectable } from '@angular/core';
import { from, observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _url = 'http://localhost:3000/enroll';

  constructor(private htpp: HttpClient) { }

enroll(user: User) {
 return this.htpp.post<any>(this._url, user)
             .pipe(catchError(this.errorHandler))
 }

errorHandler(error: HttpErrorResponse) {
  return throwError(error);
 }
}

