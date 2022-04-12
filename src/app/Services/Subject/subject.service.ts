import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { iSubject } from 'src/app/Interfaces/iSubject.model';
import { SubjectResult } from 'src/app/Interfaces/SubjectResult';

const URL = '/assets/data/subjects.json';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  constructor(private httpClient:HttpClient) {
    this.subjects =[];
    this.getData();
  }

  subjects: iSubject[];

  getData():Observable<SubjectResult> {
    console.log("Subject service getData()");

    return this.httpClient.get<SubjectResult> (URL)
    .pipe(
      map((res: SubjectResult) => res)
    );
  }

/*   filterByBorough(borough: string) {
    console.log("In neighborhood service, getting neighborhoods for borough:", borough);
    return this.neighborhoods.filter( x => x.borough == borough);
  } */

}