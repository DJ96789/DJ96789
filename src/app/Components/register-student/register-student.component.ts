import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
  studentInterests:string = '';
  studentNeighborhoods:string = '';
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  addStudent(){
    console.log("Got to addStudent()!")
    //this.router.navigate(["/register"])
    }

}
