import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { iNeighborhood } from 'src/app/Interfaces/iNeighborhood.model';
import { NeighborhoodResult } from 'src/app/Interfaces/NeighborhoodResult';
import { NeighborhoodService } from 'src/app/Services/Neighborhood/neighborhood.service';

@Component({
  selector: 'app-neighborhood-button-grid',
  templateUrl: './neighborhood-button-grid.component.html',
  styleUrls: ['./neighborhood-button-grid.component.scss']
})
export class NeighborhoodButtonGridComponent implements OnInit {
  @Input() selectedHoods:string[];

  constructor(http: HttpClient, hoodservice: NeighborhoodService) { 
    console.log("Got to neighborhood button grid!");
    this.borough="Central, Near North and Near South Side";
    this.neighborhoods= [];
    this.httpClient = http;
    this.hoods = hoodservice;
    this.selectedHoods = [];
  }

  ngOnInit(): void {
    this.hoods.getData().subscribe((result: NeighborhoodResult) => {
      this.neighborhoods = result.hoodArray;
      console.log("In neighborhood button grid, Got neighborhood data ngOnInit()!", result );
      console.log("In neighborhood button grid, this.neighborhoods", this.neighborhoods);
 
      console.log("Filtering neighborhood data, in ngOnInit()!", this.filter() );
      console.log("borough, in ngOnInit()!", this.borough );
     // this.neighborhoods = this.filter();
      console.log("Filtered this.neighborhoods", this.neighborhoods.filter( x => x.Borough == this.borough));  
    });

 //   this.neighborhoods = this.hoods.filterByBorough(this.borough);  // .neighborhoods;
  }

  neighborhoods: iNeighborhood[]; 
  borough: string;
  httpClient: HttpClient;
  hoods: NeighborhoodService;

         
  clicked(e: any, hood: any){ 
    if (this.selectedHoods.find(x => x == hood))
    {
      this.selectedHoods.splice(this.selectedHoods.findIndex(x => x == hood), 1 );
    }
    else
    {
      this.selectedHoods.push(hood);
    }

    console.log("this.selectedHoods:", this.selectedHoods);  
    // alert(e.target.name);
  } 

  get filterByBorough() {
    return this.neighborhoods.filter( x => x.Borough == this.borough);
  }

  filter(): iNeighborhood[] {
    return this.neighborhoods.filter( x => x.Borough == this.borough);
  }
}
