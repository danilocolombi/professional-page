import { Component, DestroyRef, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PROFILE, PROJECTS, CERTIFICATIONS } from '../../data/profile.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class HeroComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  profile = PROFILE;
  totalInstalls = PROJECTS.reduce((sum, p) => sum + p.installs, 0);
  azureCertCount = CERTIFICATIONS.filter(c => c.type === 'azure').length;
  currentRoleIndex = signal(0);
  visible = signal(true);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const interval = setInterval(() => {
      this.visible.set(false);
      setTimeout(() => {
        this.currentRoleIndex.update(i => (i + 1) % this.profile.roles.length);
        this.visible.set(true);
      }, 300);
    }, 3000);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  get currentRole(): string {
    return this.profile.roles[this.currentRoleIndex()];
  }
}
