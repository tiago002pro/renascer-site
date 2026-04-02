import { Component } from '@angular/core';
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
    { label: 'Home', fragment: 'hero' },
    { label: 'Quem Somos', fragment: 'sobre' },
    { label: 'Onde Estamos', fragment: 'onde-estamos' },
  ]

  activeSection$;

  constructor(private scrollSpy: ScrollSpyService) {
    this.activeSection$ = this.scrollSpy.activeSection$;
  }
}
