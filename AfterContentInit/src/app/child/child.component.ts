import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') projectedContent!: ElementRef;

  ngAfterContentInit() {
    console.log('Projected content:', this.projectedContent.nativeElement.innerText);
    this.projectedContent.nativeElement.style.backgroundColor = 'lightblue';
  }

}
