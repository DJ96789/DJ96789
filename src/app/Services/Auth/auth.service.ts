import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserObj } from 'src/app/Interfaces/userObj';
import { UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserEmail:string = "";
  allUsers:UserObj[] = [];
  currentUser:UserObj = {
    ID: 1, 
    FirstName: "Don", 
    LastName: "Johnson", 
    isActive: true,
    Email: '',
    PW: '1234',
    Roles: [],
    NickName: '',
    Phone: '',
    webUrl: ''
  };

  constructor(private httpClient: HttpClient) { }

  loginUser(userEmail: string, password: string): boolean {

    if (userEmail.length>0 && password.length>0 && this.isUserRegistered(userEmail))
    {
      this.currentUserEmail = userEmail;
    }
    console.log('userEmail: ', userEmail,  ' ',  'password: ',  password);
    return true;
  }

  logoutUser(userEmail: string): boolean {

    if (userEmail.length>0)
    {
      console.log('Logging out user: ',  userEmail );
      this.currentUserEmail = "";
    }
    return true;
  }

  isLoggedIn(userEmail: string): boolean {
    let status:string = 'not logged in!'
    let retval:boolean = false;

    if (this.currentUserEmail.length>0 && userEmail==this.currentUserEmail)
    {
      status = 'logged in.';
      retval = true;
    }

    console.log('userEmail: ',  userEmail,  ' is ',  status);
    return retval;
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

  isUserRegistered(userEmail:string): boolean {
    let registeredUser = this.allUsers.find(item => item.Email===userEmail);

    console.log("User for email '", userEmail,  "' is: ", registeredUser);
    return registeredUser!==undefined;
  }
}
