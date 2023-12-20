import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
	familyName!: Event;
	shortDescription!: Event;
	size!: Event;
	flavor!: Event;
	qrText!: Event;
	price!: Event;
	currency!: Event;
	priceStyle!: Event;

	@ViewChild('tag') tagNode!: ElementRef;

	nameTooltiptext = "Tesssssssssssssssssssst"

	constructor() { }

	ngOnInit() { }

	downloadTag() {
		const tag = this.tagNode.nativeElement;
		html2canvas(tag).then(canvas => {
			const imageName = this.familyName || 'taggenger'
			const data = canvas.toDataURL('image/png');
			const link = document.createElement('a');
			link.href = data;
			link.download = `${imageName}_rack-label-105.png`;
			link.click();
		});
	}
}
