import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackLabel105Component } from './rack-label-105/rack-label-105.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  imports: [CommonModule, QRCodeModule],
  exports: [RackLabel105Component, TooltipDirective],
  declarations: [RackLabel105Component, TooltipDirective],
})
export class SharedModule {}
