import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './Services/Auth/auth.service';
import { UserService } from './Services/User/user.service';
import { MemberService } from './Services/Member/member.service';
import { TutorService } from './Services/Tutor/tutor.service';
import { StudentService } from './Services/Student/student.service';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { MaterialModule } from './Modules/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [AuthService, UserService, MemberService, TutorService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
