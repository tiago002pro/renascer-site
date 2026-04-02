import { Component } from '@angular/core';
import { RevealDirective } from '../../../../core/directive/reveal.directive';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-onde-estamos',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './onde-estamos.component.html',
  styleUrl: './onde-estamos.component.scss'
})
export class OndeEstamosComponent {

  cidades: any[] = [];
  cidadeSelecionada: any;

  constructor(private sanitizer: DomSanitizer) {
    this.cidades = [
      {
        nome: 'Maringá',
        endereco: 'Rua Pioneiro José Jacinto Maia, 250 - Jardim Copacabana',
        url: 'https://www.google.com/maps?q=Rua+Pioneiro+José+Jacinto+Maia,+250,+Maringá,+PR'
      },
      {
        nome: 'Mandaguaçu',
        endereco: 'Av. Munhoz da Rocha, 1671 - Centro',
        url: 'https://www.google.com/maps?q=Av+Munhoz+da+Rocha,+1671,+Mandaguaçu,+PR'
      }
    ];

    this.cidades = this.cidades.map(c => ({
      ...c,
      mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        c.url + '&output=embed'
      )
    }));

    this.cidadeSelecionada = this.cidades[0];
  }

  selecionarCidade(cidade: any) {
    this.cidadeSelecionada = cidade;
  }

  openRoutes() {
    window.open(this.cidadeSelecionada.url, '_blank');
  }
}
