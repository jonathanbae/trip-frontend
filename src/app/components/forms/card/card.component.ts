import { ITrip } from '@models/trip';
import { DialogComponent } from '@components/forms/dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TripService } from '@services/trip.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  trip: string;
  dialogConfig: MatDialogConfig;
  constructor(private dialog: MatDialog, private tripService: TripService) {}

  ngOnInit(): void {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.width = '80%';
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        return;
      }
      const newTrip: ITrip = {
        id: undefined,
        name: result.tripName,
        place: [
          {
            latitude: result.address.latitude,
            longitude: result.address.longitude,
            address: result.address.address,
          },
        ],
      };

      this.tripService.addTrip(newTrip);
    });
  }
}
