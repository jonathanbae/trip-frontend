import { AddressFormComponent } from './address-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  addTitle = 'Add New Trip';
  form: FormGroup;
  hasUnitNumber = false;

  @ViewChild(AddressFormComponent, { static: true })
  addressForm: AddressFormComponent;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      tripName: [null, [Validators.required, Validators.minLength(4)]],
      address: this.addressForm.createGroup(),
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.form.value);
  }

  cancelDialog(): void {
    this.dialogRef.close();
  }
}
