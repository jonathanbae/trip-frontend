import { ITrip } from './../../../models/trip';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  addTitle = 'Add New Trip';

  form = this.fb.group({
    tripName: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  onSubmit(): void {
    this.dialogRef.close(this.form.value);
  }

  cancelDialog(): void {
    this.dialogRef.close();
  }
}
