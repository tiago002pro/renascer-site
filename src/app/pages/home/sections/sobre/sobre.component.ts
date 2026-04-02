import { Component } from '@angular/core';
import { RevealDirective } from '../../../../core/directive/reveal.directive';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
