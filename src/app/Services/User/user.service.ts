import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user_api_url: string = 'http://localhost:8080/api/test';    //'api.localhost.com';

  constructor(private httpClient: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.httpClient.post(this.user_api_url + '/create', user)
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.tossError(error))
      )

  }
  getUsers(): Observable<any> {
    return this.httpClient.get(this.user_api_url + '/read')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.tossError(error))
      )

  }
  updateUser(user: any): Observable<any> {
    return this.httpClient.get(this.user_api_url + '/update')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.tossError(error))
      )

  }
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.user_api_url + '/delete/{id}')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.tossError(error))
      )

  }

  tossError(error: any) {
    console.error(error);
    return throwError(() => error.json().error || 'Server error');
  }

}
