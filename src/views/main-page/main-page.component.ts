import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  tagInfo!: FormGroup;
  familyName = 'Fulano Benganez';
  shortDescription = 'Un desarrollador';
  size = 'Junior';
  flavor = 'Backend';
  //price = '20k';
  qrText!: Event;
  price!: Event;

  constructor(private formBuilder: FormBuilder) {
    this.tagInfo = formBuilder.group({
      familyName: this.familyName,
      shortDescription: this.shortDescription,
      size: this.size,
      flavor: this.flavor,
      //price: this.price,
    });
  }

  ngOnInit() {}

  public setFormData(): void {
    this.familyName =
      this.tagInfo?.get('familyName')?.value || 'Fulano Beganez';
    this.shortDescription =
      this.tagInfo?.get('shortDescription')?.value ||
      'Tu picacódigo de confianza';
    this.size = this.tagInfo?.get('size')?.value || 'Junior';
    this.flavor = this.tagInfo?.get('flavor')?.value || 'Backend';
    //this.price = this.tagInfo?.get('price')?.value || '20K';
  }
}
