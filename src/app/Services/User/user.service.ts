import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserObj } from 'src/app/Interfaces/userObj';
import { iAddress } from 'src/app/Interfaces/iAddress.model';
import { iBillingInfo } from 'src/app/Interfaces/iBillingInfo.model';
import { NeighborhoodResult } from 'src/app/Interfaces/NeighborhoodResult';
import { StudentResult } from 'src/app/Interfaces/StudentResult';
import { SubjectResult } from 'src/app/Interfaces/SubjectResult';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user_api_url: string = 'http://localhost:8080/api/test';    //'api.localhost.com';
  private users:UserObj[] = {} as UserObj[];
  private current_user!: UserObj;
  private current_user_id: number = 0;
  private adminUsr:UserObj = {
    ID: 1,
    UserType: "admin",
    Email: "dj96789@yahoo.com",
    PW: "admin",
    FirstName: "Don",
    LastName: "Johnson",
    NickName: "Don",
    Gender: "male",
    Birthday: new Date("2-17-1957"),
    GradeLevel: "n/a",
    Phone: "8086381807",
    webUrl: "",
    isActive: true,
    Address: {
      AddressLine1: "",
      AddressLine2:"",
      City:"Detroit",
      State:"Michigan",
      ZipCode:"48219"
    } as iAddress,
    BillingInfo: {
      FirstName:"Donald",
      LastName:"Johnson",
      AddressLine1:"12345 Street",
      AddressLine2:"",
      City:"Detroit",
      State:"Michigan",
      ZipCode:"48219",
      CardNumber:"1234-1234-1234-1234",
      CardCode:"1234",
      ExpirationDate: new Date("12-12-1200"),
      PhoneNumber:"1234567890",
    } as iBillingInfo,
    Neighborhoods:{
      hoodArray:[],
    } as NeighborhoodResult,
    Subjects: {
      subjectArray:[{}],
    } as SubjectResult,
    Students: {
      studentArray: [],
    } as StudentResult,
    CreateDate: new Date(),
    ModDate: new Date(0) ,
    ActiveDate: new Date(),
    InactiveDate: new Date(0),
    Note: "BMF"
  } as UserObj;


  constructor(private httpClient: HttpClient) {
    this.users.push(this.adminUsr);
  }

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

  setCurrentUser(user: UserObj): Observable<boolean> {
    this.current_user = user;
    return of(true);
  }

  getCurrentUser(): Observable<UserObj> {
    return of(this.current_user);
  }

  setCurrentUserId(id: number): Observable<boolean> {
    this.current_user_id = id;
    return of(true);
  }

  getCurrentUserId(): Observable<number> {
    return of(this.current_user.ID);
  }

  tossError(error: any) {
    console.error(error);
    return throwError(() => error.json().error || 'Server error');
  }

}
