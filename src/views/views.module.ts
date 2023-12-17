import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipDirective } from '../app/shared/tooltip/tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule,
  ],
  exports: [MainPageComponent],
  declarations: [MainPageComponent],
})
export class ViewsModule {}
