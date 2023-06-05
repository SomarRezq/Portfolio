// app.component.ts
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './Services/PortfolioService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
  portfolioData: any;
  styleData: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadPortfolioData();
    this.loadStyleData();
  }

  loadPortfolioData() {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
      // you can perform more tasks here
    });
  }

  loadStyleData() {
    this.portfolioService.getStyleData().subscribe(data => {
      this.styleData = data;
      // you can perform more tasks here
    });
  }
}
