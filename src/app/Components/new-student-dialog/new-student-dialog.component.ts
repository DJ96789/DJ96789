import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NeighborhoodButtonGridComponent } from '../neighborhood-button-grid/neighborhood-button-grid.component';

@Component({
  selector: 'app-new-student-dialog',
  templateUrl: './new-student-dialog.component.html',
  styleUrls: ['./new-student-dialog.component.scss']
})
export class NewStudentDialogComponent implements OnInit {
  studentForm: FormGroup;
  description:string;
  subjectInterests:string[] = [];
  selectedNeighborhoods:string[] = [];
  firstName:string= '';
  lastName:string= '';
  loginEmail:string= '';
  password:string= '';
  gradeLevel:string = '';
  gender:string = '';
  age:string = '';


  @ViewChild(NeighborhoodButtonGridComponent)
  set appShark(ngrid: NeighborhoodButtonGridComponent) {
    this.selectedNeighborhoods = ngrid.selectedHoods;
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewStudentDialogComponent>,
  ) { 
    this.description = data.name;
    this.studentForm = this.fb.group({
      description: [this.description, []],
      firstName: "",
      lastName: "",
      loginEmail: "",
      password: "",
      gender: "",
      gradeLevel: "",
      age: "",  
      subjectInterests: [],
      selectedNeighborhoods: [] });
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
    description: [this.description, []],
    firstName: "",
    lastName: "",
    loginEmail: "",
    password: "",
    gender: "",
    gradeLevel: "",
    age: "",
  })
    console.log('Dialog ngInit. selectedNeighborhoods:', this.selectedNeighborhoods);
  }

  save() {
    console.log('Dialog exit passing result:', this.studentForm.value);
    this.dialogRef.close(this.studentForm.value);
  }

  close() {
      this.dialogRef.close();
  }

  
  onSend(form: NgForm) {
    let data = form.value;
    console.log(data);
  }
}
