import { TripsComponent } from './components/trips/trips.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  { path: 'trips', component: TripsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
