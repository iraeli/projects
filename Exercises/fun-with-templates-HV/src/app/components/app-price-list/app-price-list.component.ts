import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-price-list',
  templateUrl: './app-price-list.component.html',
  styleUrls: ['./app-price-list.component.css']
})
export class AppPriceListComponent implements OnInit {

  constructor() { }
  prices : any = [];
  ngOnInit() {
  }

  fillList(num : number){
    this.prices.push(num);
    
    console.log(this.prices);
  }
}
