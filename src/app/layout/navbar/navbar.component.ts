import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScrollSpyService } from '../../core/service/scroll-spy.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menu = [
    { label: 'Home', fragment: 'home' },
    { label: 'Quem Somos', fragment: 'sobre' },
    { label: 'Liderança', fragment: 'lideranca' },
    { label: 'Onde Estamos', fragment: 'onde-estamos' },
  ]

  isScrolled = false;
  private lastState = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const current = window.scrollY > 50;

    if (current !== this.lastState) {
      this.isScrolled = current;
      this.lastState = current;
    }

    if (this.menuOpen) this.activeScrollNav();
  }

  activeSection$;

  constructor(private scrollSpy: ScrollSpyService) {
    this.activeSection$ = this.scrollSpy.activeSection$;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.activeScrollNav();
  }

  closeMenu() {
    this.menuOpen = false;
  }

  activeScrollNav() {
    this.isScrolled = this.menuOpen;
    this.lastState = this.menuOpen;
  }
}
