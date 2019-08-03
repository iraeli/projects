import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTodayFriday = true;
  thingsToDoToday = ['Wash the dishes', 'Take Rony from garden', 'Do homework'];

  thingsToDoEveryday = ['Toothbrush', 'Get Dressed'];

  someNumber = 42;

  dataContext1 = {
    x: 100,
    y: 200, 
    $implicit: {color: 'blue', size: '16px'}
  };

  dataContext2 = {
    x: -20,
    y: 314, 
    $implicit: {color: 'red', size: '42px'}
  };

}
