import { DialogComponent } from '@components/forms/dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  trip: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openFormDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('the dialog was closed');
      this.trip = result; //TODO make this an iTrip and grab all the data
    });
  }
}
