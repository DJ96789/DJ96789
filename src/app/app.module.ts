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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageDialogComponent } from './Components/message-dialog/message-dialog.component';
import { TutorComponent } from './Components/tutor/tutor.component';
import { MemberComponent } from './Components/member/member.component';
import { SubscriberComponent } from './Components/subscriber/subscriber.component';
import { StudentComponent } from './Components/student/student.component';
import { RegisterTutorComponent } from './Components/register-tutor/register-tutor.component';
import { RegisterMemberComponent } from './Components/register-member/register-member.component';
import { RegisterStudentComponent } from './Components/register-student/register-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    MessageDialogComponent,
    TutorComponent,
    MemberComponent,
    SubscriberComponent,
    StudentComponent,
    RegisterTutorComponent,
    RegisterMemberComponent,
    RegisterStudentComponent
  ],
  entryComponents: [MessageDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, UserService, MemberService, TutorService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
