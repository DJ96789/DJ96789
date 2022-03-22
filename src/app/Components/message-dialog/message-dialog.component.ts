import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {
  form: FormGroup;
  description:string;
  studentInterests:string = '';

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
  }

  save() {
    console.log('Dialog exit passing result:', this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
