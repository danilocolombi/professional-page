import { Component } from '@angular/core';
import { PROJECTS } from '../../data/profile.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  projects = PROJECTS;
}
