import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import 'zone.js';
import { ViewsModule } from './app/views/views.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ViewsModule, QRCodeModule],
	template: `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    </style>
    <h1>{{ name }}</h1>
    <app-main-page>
    `,
})
export class App {
	public name: string = 'Taggenger Creator';
}

bootstrapApplication(App);
