import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import {Imovel} from '../imovel';

const endpoint = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getImoveis(): Observable<any> {
    return this.http.get<Imovel>(endpoint + 'imoveis').pipe(
      retry(2),
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  
}

