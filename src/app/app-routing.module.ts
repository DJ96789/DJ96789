import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { TutorComponent } from './Components/tutor/tutor.component';
import { MemberComponent } from './Components/member/member.component';
import { StudentComponent } from './Components/student/student.component';
import { RegisterTutorComponent } from './Components/register-tutor/register-tutor.component';
import { RegisterMemberComponent } from './Components/register-member/register-member.component';
import { RegisterStudentComponent } from './Components/register-student/register-student.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NeighborhoodsComponent } from './Components/neighborhoods/neighborhoods.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'tutor', component: TutorComponent},
  { path: 'member', component: MemberComponent},
  { path: 'student', component: StudentComponent},
  { path: 'register-tutor', component: RegisterTutorComponent},
  { path: 'register-member', component: RegisterMemberComponent},
  { path: 'register-student', component: RegisterStudentComponent},
  { path: 'neighborhoods', component: NeighborhoodsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
