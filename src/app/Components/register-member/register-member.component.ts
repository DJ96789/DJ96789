import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserObj } from 'src/app/Interfaces/userObj';
import { MessageDialogComponent } from '../../Components/message-dialog/message-dialog.component';
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
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: 'Funky Town'
    };


    let dialogRef = this.dialog.open(MessageDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', {result});
    });
  }

}
