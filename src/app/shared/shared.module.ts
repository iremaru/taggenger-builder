import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackLabel105Component } from './rack-label-105/rack-label-105.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
	imports: [CommonModule, QRCodeModule],
	exports: [RackLabel105Component],
	declarations: [RackLabel105Component],
})
export class SharedModule { }
