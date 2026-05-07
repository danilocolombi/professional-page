import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/profile.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  experiences = EXPERIENCE;
}
