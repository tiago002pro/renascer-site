import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../../../core/directive/reveal.directive';
import { DataService } from '../../../../core/service/data.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit {

  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSobreData().subscribe(res => {
      this.data = res;
    })
  }
}
