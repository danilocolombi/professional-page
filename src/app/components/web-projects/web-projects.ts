import { Component } from '@angular/core';
import { WEB_PROJECTS } from '../../data/profile.data';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.html',
})
export class WebProjectsComponent {
  projects = WEB_PROJECTS;
}
