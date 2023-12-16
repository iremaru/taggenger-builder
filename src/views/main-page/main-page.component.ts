import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor() {}

  ngOnInit() {}
}
