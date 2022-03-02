import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-tutor',
  templateUrl: './register-tutor.component.html',
  styleUrls: ['./register-tutor.component.scss']
})
export class RegisterTutorComponent implements OnInit {
  tutorSpecializations:string = '';
  tutorNeighborhoods:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
