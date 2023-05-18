import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './Services/PortfolioService';
import { Resume } from './Model/Resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  portfolioData: Resume | null = null; 
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
    });
  }
}
