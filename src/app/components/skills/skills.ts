import { Component } from '@angular/core';
import { SKILLS } from '../../data/profile.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class SkillsComponent {
  skillGroups = SKILLS;
}
