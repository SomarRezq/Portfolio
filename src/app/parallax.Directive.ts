import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;
  initialTop: number = 100;
  constructor(private eleRef: ElementRef) {

  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
      
      if ((window.scrollY * this.parallaxRatio) >= 1700){
        this.eleRef.nativeElement.style.top = 1700 + 'px';
      }
      else{
        this.eleRef.nativeElement.style.top = ( this.initialTop + (window.scrollY * this.parallaxRatio)) + 'px';
      }
   
  }

}