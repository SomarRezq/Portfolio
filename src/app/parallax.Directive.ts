import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;
  initialTop: number = 0;
  deleteWelcome: number = 0;
  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
      
      if ((window.scrollY * this.parallaxRatio) >= 1250){
        this.eleRef.nativeElement.style.top = 0 + 'px';
      }
      else{
        this.eleRef.nativeElement.style.top = (1300 - (window.scrollY * this.parallaxRatio)) + 'px';
      }
   
  }

}