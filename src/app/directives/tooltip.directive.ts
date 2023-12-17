import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appTooltip]',
	standalone: true,
})
export class TooltipDirective {

	@Input({ required: true }) tooltipText!: string;

	private tooltipElement!: HTMLDivElement | null;
	private tooltipClasses = 'tooltip';
	private parentEl!: HTMLElement | null;

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	@HostListener('mouseenter')
	onMouseEnter() {
		this.showTooltip();
	}

	@HostListener('mouseleave')
	onMouseExit() {
		this.hideTooltip();
	}

	private showTooltip() {
		if (!this.tooltipElement) {
			this.parentEl = (this.el.nativeElement as HTMLElement).parentElement;
			this.tooltipElement = this.renderer.createElement('div');
			this.renderer.addClass(this.tooltipElement, this.tooltipClasses);
			this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipText));
			this.renderer.appendChild(this.parentEl, this.tooltipElement);

			const targetPosition = this.el.nativeElement.getBoundingClientRect();
			const tooltipPosition = this.tooltipElement?.getBoundingClientRect();

			const left = targetPosition.left + 10;
			//const top = targetPosition.top - (tooltipPosition?.height ?? 5);
			const top = targetPosition.top - (tooltipPosition?.height ?? 30);
			const width = targetPosition.width;

			this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
			this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
			this.renderer.setStyle(this.tooltipElement, 'min-width', `${width}px`);
		}
	}

	private hideTooltip() {
		if (this.tooltipElement) {
			this.renderer.removeChild(this.parentEl, this.tooltipElement);
			this.tooltipElement = null;
		}

	}

}
