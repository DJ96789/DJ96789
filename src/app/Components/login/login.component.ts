import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Got to onClick()!")
    this.router.navigate(["/register"])
    }
}
