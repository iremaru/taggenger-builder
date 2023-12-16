import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rack-label-105',
  templateUrl: './rack-label-105.component.html',
  styleUrls: ['./rack-label-105.component.scss'],
})
export class RackLabel105Component implements OnInit {
  @Input({ required: true }) familyName!: string;
  @Input({ required: true }) shortDescription!: string;
  @Input({ required: true }) size!: string;
  @Input({ required: true }) flavor!: string;

  @Input({ required: true }) qrText!: string;
  @Input({ required: true }) price!: string;

  constructor() {}

  ngOnInit() {
    console.log(this.qrText);
  }
}
