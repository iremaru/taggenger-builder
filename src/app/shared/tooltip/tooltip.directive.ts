import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input({required: true}) tooltipText:string  = "No Text"; 

  private tooltipElement!:HTMLDivElement | null;
  private tooltipClasses = 'tooltip';
  private parentEl!: HTMLElement;

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.showTooltip();
  }

  @HostListener('mouseleave')
  onMouseExit(){
    this.hideTooltip();
  }

  private showTooltip(){
    if(!this.tooltipElement){
      this.parentEl = document.body;
      console.log('TOOLTIP GENERADO')
      this.tooltipElement = this.renderer.createElement('div');
      this.renderer.addClass(this.tooltipElement, this.tooltipClasses);
      this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipText));
      this.renderer.appendChild(this.parentEl, this.tooltipElement);

      const targetPosition = this.el.nativeElement.getBoundingClientRect();
      const tooltipPosition = this.tooltipElement?.getBoundingClientRect();

      const left = targetPosition.left + targetPosition.width / 2 - (tooltipPosition?.width ?? 1) / 2;
      const top = targetPosition.top - (tooltipPosition?.height ?? 5) - 5;

      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    }
  }

  private hideTooltip(){
    if(this.tooltipElement){
      console.log('TOOLTIP ESCONDIDO')
      this.renderer.removeChild(this.parentEl, this.tooltipElement);
      this.tooltipElement = null;
    }

  }

}