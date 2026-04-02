import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  cidades = [
    {
      nome: 'Maringá',
      endereco: 'Rua Pioneiro José Jacinto Maia, 250 - Jardim Copacabana'
    },
    {
      nome: 'Mandaguaçu',
      endereco: 'Av. Munhoz da Rocha, 1671 - Centro'
    }
  ];

  socialMedia = [
    { icon: 'bi bi-instagram', link: 'https://www.instagram.com/renascermaringa/?hl=pt-br' },
    { icon: 'bi bi-facebook', link: 'https://www.facebook.com/igrejarenascermaringa' },
    { icon: 'bi bi-youtube', link: 'https://www.youtube.com/@RenascerMaringá' },
  ];

  openLink(link: string) {
    window.open(link, '_blank');
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
