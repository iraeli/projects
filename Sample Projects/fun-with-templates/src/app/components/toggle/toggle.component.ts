import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input()
  isOn: boolean = false;

  @Input()
  value: string = 'value';

  @Input()
  onTemplate: TemplateRef<any>;

  @Input()
  offTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
