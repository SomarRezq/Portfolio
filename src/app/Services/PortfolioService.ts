import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly portfolioDataUrl = './assets/CV/portfolioData.json';
  private readonly styleDataUrl = './assets/CV/styleData.json';

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<any> {
    return this.http.get<any>(this.portfolioDataUrl);
  }

  getStyleData(): Observable<any> {
    return this.http.get<any>(this.styleDataUrl);
  }
}
