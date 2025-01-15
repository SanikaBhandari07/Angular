import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = "";
  counter: number = 0;

  increment() {
    this.counter++;
  }

  ngAfterViewChecked() {
    console.log('View checked. Current counter value:', this.counter);
  }
}
