import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iNeighborhood } from 'src/app/Interfaces/iNeighborhood.model';

const ELEMENT_DATA: iNeighborhood[] = [
  { name: 'Hydrogen',  borough: "", city: 'H ', state: 'H ', zipcode: 'H '},
  { name: 'Helium',    borough: "", city: 'He', state: 'He', zipcode: 'He'},
  { name: 'Lithium',   borough: "", city: 'Li', state: 'Li', zipcode: 'Li'},
  { name: 'Beryllium', borough: "", city: 'Be', state: 'Be', zipcode: 'Be'},
  { name: 'Boron',     borough: "", city: 'B ', state: 'B ', zipcode: 'B '},
  { name: 'Carbon',    borough: "", city: 'C ', state: 'C ', zipcode: 'C '},
  { name: 'Nitrogen',  borough: "", city: 'N ', state: 'N ', zipcode: 'N '},
  { name: 'Oxygen',    borough: "", city: 'O ', state: 'O ', zipcode: 'O '},
  { name: 'Fluorine',  borough: "", city: 'F ', state: 'F ', zipcode: 'F '},
  { name: 'Neon',      borough: "", city: 'Ne', state: 'Ne', zipcode: 'Ne'},
];

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  constructor(private httpClient:HttpClient) { }


}
