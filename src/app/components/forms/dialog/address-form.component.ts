import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  template: `
    <div [formGroup]="addressFormGroup">
      <mat-form-field class="full-width">
        <textarea
          matInput
          placeholder="Address"
          formControlName="address"
        ></textarea>
        <mat-error
          *ngIf="addressFormGroup.controls['address'].hasError('required')"
        >
          Address is <strong>required</strong>
        </mat-error>
      </mat-form-field>
      <mat-form-field class="full-width">
        <input matInput placeholder="City" formControlName="city" />
      </mat-form-field>
      <div *ngIf="!hasUnitNumber">
        <button
          mat-button
          type="button"
          (click)="hasUnitNumber = !hasUnitNumber"
        >
          + Add C/O, Apt, Suite, Unit
        </button>
      </div>
      <div *ngIf="hasUnitNumber">
        <mat-form-field class="full-width">
          <textarea
            matInput
            placeholder="Address 2 (Optional)"
            formControlName="address2"
          ></textarea>
        </mat-form-field>
      </div>
      <div class="long-lat-form">
        <mat-form-field class="latitude">
          <mat-label>Longitude</mat-label>
          <input matInput formControlName="latitude" />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Longitude</mat-label>
          <input matInput formControlName="longitude" />
          <mat-error
            *ngIf="addressFormGroup.controls['longitude'].hasError('pattern')"
            >Invalid longitude number
          </mat-error>
        </mat-form-field>
      </div>
    </div>
  `,
  styleUrls: ['./dialog.component.scss'],
})
export class AddressFormComponent implements OnInit {
  // addressFormGroup: FormGroup;
  addressFormGroup: FormGroup;

  @Input() hasUnitNumber: boolean;

  constructor(private fb: FormBuilder) {
    // TODO make a FormGroupConfig:
    // https://medium.com/@tomastrajan/angular-reactive-sub-forms-type-safe-without-duplication-dbd24225e1e8
    this.addressFormGroup = this.fb.group({
      address: [null, Validators.required],
      address2: null,
      city: null,
      latitude: [null, Validators.pattern('([0-9.-]+).+?([0-9.-]+)')],
      longitude: [null, Validators.pattern('([0-9.-]+).+?([0-9.-]+)')],
    });
  }

  ngOnInit(): void {}

  createGroup(): FormGroup {
    return this.addressFormGroup;
  }
}
