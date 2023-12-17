import {
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-rack-label-105',
  templateUrl: './rack-label-105.component.html',
  styleUrls: ['./rack-label-105.component.scss'],
})
export class RackLabel105Component implements OnInit, AfterViewInit, OnChanges {
  @Input({ required: true }) familyName!: string;
  @Input({ required: true }) shortDescription!: string;
  @Input({ required: true }) size!: string;
  @Input({ required: true }) flavor!: string;

  @Input({ required: true }) qrText!: string;
  @Input({ required: true }) currency!: string;
  @Input({ required: true }) price!: string;

  priceText!: HTMLElement;
  priceText_DefaultFontSize = 36;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.priceText = this.el.nativeElement.querySelector(
      '#priceText'
    ) as HTMLElement;
  }

  ngAfterViewInit() {
    this.priceText_DefaultFontSize = parseInt(
      window.getComputedStyle(this.priceText).fontSize
    );

    this.correctTextSize(this.priceText, this.priceText_DefaultFontSize);
  }

  ngOnChanges() {
    if (this.priceText != null)
      this.correctTextSize(this.priceText, this.priceText_DefaultFontSize);
  }

  /**Correct the text size so it don't overflow the box */
  correctTextSize(element: HTMLElement, defaultFontSize: number) {
    const elementWidth = element.offsetWidth;
    const parentWidth = (element.parentElement as HTMLElement).offsetWidth;

    const ratio = parentWidth / elementWidth;
    if (ratio >= 1 && ratio <= 1.2) return;

    const prevFontSize = parseInt(window.getComputedStyle(element).fontSize);
    const newFontSize =
      ratio < 1 ? Math.floor(ratio * prevFontSize) : defaultFontSize;

    this.renderer.setStyle(element, 'font-size', newFontSize + 'px');
  }
}
