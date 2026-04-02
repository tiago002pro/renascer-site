import { Component } from '@angular/core';
import { SobreComponent } from "./sections/sobre/sobre.component";
import { OndeEstamosComponent } from "./sections/onde-estamos/onde-estamos.component";
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SobreComponent, OndeEstamosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
