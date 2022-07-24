import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserObj } from 'src/app/Interfaces/userObj';
import { NewStudentDialogComponent } from '../new-student-dialog/new-student-dialog.component';
@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.scss']
})
export class RegisterMemberComponent implements OnInit {
  member:UserObj|undefined = undefined;
  memberInterests:string = '';
  memberNeighborhoods:string = '';
  studentInterests:string = '';

  constructor(public dialog: MatDialog, ) {
    // inject member service
    // get member from member service by email
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: 'Funky Town',
      studentForm:  {
        firstName: "",
        lastName: "",
        loginEmail: "",
        password: "",
        gender: "",
        gradeLevel: "",
        age: "",
        subjectInterests: [],
        selectedNeighborhoods: [] },
    };


    let dialogRef = this.dialog.open(NewStudentDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', {result});

      if (result !== undefined) {
        if (result !== 'cancel') {
          const enabled = "Y"
          console.log('User clicked add.');
          console.log(result);
        } else if (result === 'cancel') {
           console.log('User clicked cancel.');
        }
    }

    });
  }

}
