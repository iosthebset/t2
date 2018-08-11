import {Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appPColor]'
})

export class PColorDirective implements OnInit, OnChanges {

  @Input('appPColor') elColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.elColor;
    this.el.nativeElement.style.color = '#fff';
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.elColor;
    this.el.nativeElement.style.color = '#fff';
  }
}
