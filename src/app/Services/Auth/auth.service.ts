import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserObj } from 'src/app/Interfaces/userObj';
import { UrlSegment } from '@angular/router';
import { LLAuth } from 'src/app/Models/LLAuth';
import { AuthObj } from 'src/app/Interfaces/authObj';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUsers:AuthObj[] = [];
  allUsers:UserObj[] = [];

  constructor(private httpClient: HttpClient) { }

  loginUser(userEmail: string, password: string): boolean {

    if (userEmail.length>0 && password.length>0 && this.isUserRegistered(userEmail) && !this.isLoggedIn(userEmail))
    {
      let auth:AuthObj = 
      { 
        Email: userEmail, 
        LoginDate: new Date(),
      };
      this.loggedInUsers.push(auth);
    }
    console.log('userEmail: ', userEmail,  ' ',  'password: ',  password, "logged in");
    return true;
  }

  logoutUser(userEmail: string): boolean {

    if (userEmail.length>0 && this.isUserRegistered(userEmail) && this.isLoggedIn(userEmail))
    {
      console.log('Logging out user: ',  userEmail );
      let loggedInUsr = this.loggedInUsers.find(item => item.Email===userEmail);
      if (loggedInUsr !== undefined) 
      {
        this.loggedInUsers.splice(this.loggedInUsers.indexOf(loggedInUsr,1));
      }
    }
    return true;
  }

  isLoggedIn(userEmail: string): boolean {
    let status:string = 'not logged in!'
    let retval:boolean = false;

    let loggedInUsr = this.loggedInUsers.find(item => item.Email===userEmail);
    if (loggedInUsr != undefined)
    {
      status = 'logged in.';
      retval = true;
    }

    console.log('userEmail: ',  userEmail,  ' is ',  status);
    return retval;
  }

  isUserRegistered(userEmail:string): boolean {
    let registeredUser = this.allUsers.find(item => item.Email===userEmail);

    console.log("User for email '", userEmail,  "' is: ", registeredUser);
    return registeredUser!==undefined;
  }

  registerUser(user: UserObj): boolean {
    let registeredUser = this.allUsers.find(item => item.Email===user.Email && item.PW===user.PW);
    
    if (registeredUser===undefined) {
      console.log("Registering User: ",  user);
      this.allUsers.push(user);
    }
    else {
      console.log("User already Registered: ",  user);
    }

    console.log(this.allUsers);
    return true;
  }

  unregisterUser(user: UserObj): boolean {
    let registeredUser = this.allUsers.find(item => item.Email===user.Email && item.PW===user.PW);
    
    if (registeredUser!==undefined) {
      console.log("Unregistering User: ",  user);
      this.allUsers.splice(this.allUsers.indexOf(user,1));
    }
    else {
      console.log("Can't unregister. User Not Registered: ",  user);
    }

    console.log(this.allUsers);
    return true;
  }

  getAllUsers(): UserObj[] {
    console.log(this.allUsers);

    return this.allUsers;
  }

  getAllLoggedInUsers(): AuthObj[] {
    console.log(this.loggedInUsers);

    return this.loggedInUsers;
  }

}
