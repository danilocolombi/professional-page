import { Component, input, signal } from '@angular/core';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isScrolled = input.required<boolean>();
  mobileOpen = signal(false);
  profile = PROFILE;

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
