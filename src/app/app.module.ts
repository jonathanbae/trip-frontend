import { TripsComponent } from './components/trips/trips.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripDetailComponent } from './components/trip-detail/trip-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ExploreComponent } from './components/explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripDetailComponent,
    MessagesComponent,
    ExploreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
