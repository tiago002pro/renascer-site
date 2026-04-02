import { AfterViewInit, Component } from '@angular/core';
import { SobreComponent } from "./sections/sobre/sobre.component";
import { OndeEstamosComponent } from "./sections/onde-estamos/onde-estamos.component";
import { HeroComponent } from './hero/hero.component';
import { ScrollSpyService } from '../../core/service/scroll-spy.service';
import { RevealDirective } from '../../core/directive/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SobreComponent, OndeEstamosComponent, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  constructor(private scrollSpy: ScrollSpyService) {}

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.scrollSpy.setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6 // 60% da seção visível
      }
    );

    sections.forEach(section => observer.observe(section));
  }
}
