import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  favoriteHistoric: string;
  // historic: string[] = ['Sang-Froid', 'Super Leader', 'GG<3'];

  constructor() { }

  ngOnInit(): void {
  }

}
