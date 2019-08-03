import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-big-price',
  templateUrl: './big-price.component.html',
  styleUrls: ['./big-price.component.css']
})
export class BigPriceComponent implements OnInit {

   
  @Input()
  expensivePrice: number = 0;

  @Input()
  bigNumber: number = 0;

  @Input()
  redTemplate: TemplateRef<any>;

  @Input()
  boldTemplate: TemplateRef<any>;

  @Input()
  largerFont: TemplateRef<any>;

  constructor() { }
  ngOnInit() {
  }

}
