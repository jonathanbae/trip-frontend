import { AddressFormComponent } from './components/forms/dialog/address-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardComponent } from '@components/forms/card/card.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { ExploreComponent } from '@components/explore/explore.component';
import { MessagesComponent } from '@components/messages/messages.component';
import { DialogComponent } from '@components/forms/dialog/dialog.component';

import { ElevationDirective } from '@directives/elevation.directive';

import { TripsComponent } from '@trips/trips.component';
import { TripCardComponent } from '@trips/trip-card/trip-card.component';
import { TripDetailComponent } from '@trips/trip-detail/trip-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripDetailComponent,
    MessagesComponent,
    ExploreComponent,
    NavigationComponent,
    TripCardComponent,
    ElevationDirective,
    CardComponent,
    DialogComponent,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
