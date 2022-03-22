import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentResult } from 'src/app/Interfaces/StudentResult';

const URL = '../assets/studentdata.json';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getData():Observable<StudentResult> {
    console.log("Student service getData()");

    return this.httpClient.get<StudentResult> (URL)
    .pipe(
      map((res: StudentResult) => res)
    );
  }
}
