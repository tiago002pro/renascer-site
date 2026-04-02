import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-active');
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    setTimeout(() => {
      observer.observe(element);
    }, 100);
  }
}