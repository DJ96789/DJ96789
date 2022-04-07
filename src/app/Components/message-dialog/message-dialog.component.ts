import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NeighborhoodButtonGridComponent } from '../neighborhood-button-grid/neighborhood-button-grid.component';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {
  form: FormGroup;
  description:string;
  studentInterests:string ='';
  selectedNeighborhoods:string[] = [];

  @ViewChild(NeighborhoodButtonGridComponent)
  set appShark(ngrid: NeighborhoodButtonGridComponent) {
    this.selectedNeighborhoods = ngrid.selectedHoods;
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MessageDialogComponent>,
  ) { 
    this.description = data.name;
    this.form = this.fb.group({
      description: [this.description, []],
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
    description: [this.description, []],
    })
    console.log('Dialog ngInit. selectedNeighborhoods:', this.selectedNeighborhoods);
  }

  save() {
    console.log('Dialog exit passing result:', this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
