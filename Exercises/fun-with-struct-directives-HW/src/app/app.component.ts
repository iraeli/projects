import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag: boolean = true;

  words: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];

  toggleFlag() {
    this.flag = !this.flag;
  }
}
