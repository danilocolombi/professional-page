import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();
}
