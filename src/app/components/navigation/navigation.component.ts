import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() title: string;
  @Input() isWeb: boolean;

  constructor(private location: Location) {}

  get onExplorePage(): boolean {
    return location.pathname === '/explore';
  }

  get onTripsPage(): boolean {
    return location.pathname === '/trips';
  }
}
