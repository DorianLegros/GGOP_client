import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honor',
  templateUrl: './honor.component.html',
  styleUrls: ['./honor.component.scss']
})
export class HonorComponent implements OnInit {

  favoriteHonor: string;
  honors: string[] = ['Sang-Froid', 'Super Leader', 'GG<3'];
  constructor() { }

  ngOnInit(): void {
  }

}
