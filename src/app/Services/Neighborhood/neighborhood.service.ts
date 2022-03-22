import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NeighborhoodResult } from 'src/app/Interfaces/NeighborhoodResult';
import { map, Observable } from 'rxjs';
import { iNeighborhood } from 'src/app/Interfaces/iNeighborhood.model';

const URL = '/assets/data/neighborhoods.json';

@Injectable({
  providedIn: 'root'
})

export class NeighborhoodService {
  constructor(private httpClient:HttpClient) {
    this.neighborhoods =[];
    this.getData();
  }

  neighborhoods: iNeighborhood[];

  getData():Observable<NeighborhoodResult> {
    console.log("Neighborhood service getData()");

    return this.httpClient.get<NeighborhoodResult> (URL)
    .pipe(
      map((res: NeighborhoodResult) => res)
    );
  }

/*   filterByBorough(borough: string) {
    console.log("In neighborhood service, getting neighborhoods for borough:", borough);
    return this.neighborhoods.filter( x => x.borough == borough);
  } */

}