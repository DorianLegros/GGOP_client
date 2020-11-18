import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  favoriteReport: string;
  reports: string[] = ['Feeding intentionnel', 'Discriminations et offenses', 'AFK'];
  constructor() { }

  ngOnInit(): void {
  }

}
