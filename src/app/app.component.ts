// app.component.ts
import { Component, OnInit, isDevMode } from '@angular/core';
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
      if(isDevMode()){
        data.parallax.picture = "../assets/rocks.jpg";
        data.basics.picture = "../assets/photo_2022-10-13_19-24-22.jpg"; 
      }
      else{
        data.parallax.picture = "docs/assets/cv/rocks.jpg"; // not quite sure about the path of the image
        data.basics.picture = "docs/assets/photo_2022-10-13_19-24-22.jpg"; // not quite sure about the path of the image
      }
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
