import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  title = "As";
  @ViewChild('containerDiv') containerDiv!: ElementRef; 

  ngAfterViewInit() {
    this.containerDiv.nativeElement.style.backgroundColor = 'lightblue';
    console.log('AfterViewInit: Background color set to lightblue.');
  }

  changeBackgroundColor() {
    this.containerDiv.nativeElement.style.backgroundColor = 'lightgreen';
    console.log('Background color changed to lightgreen.');
  }
}
