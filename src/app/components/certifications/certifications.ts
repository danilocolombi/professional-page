import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../data/profile.data';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.html',
})
export class CertificationsComponent {
  certifications = CERTIFICATIONS;
}
