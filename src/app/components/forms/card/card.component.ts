import { DialogComponent } from '@components/forms/dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  trip: string;
  dialogConfig: MatDialogConfig;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.width = '80%';
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog output:', result);
    });
  }
}
