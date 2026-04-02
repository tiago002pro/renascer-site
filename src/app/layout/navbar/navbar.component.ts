import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menu = [
    { label: 'Home', fragment: 'hero' },
    { label: 'Quem Somos', fragment: 'sobre' },
    { label: 'Onde Estamos', fragment: 'onde-estamos' },
  ]
}
