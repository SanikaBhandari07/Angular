import { Component, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements AfterContentChecked {
  @ContentChild('projectedContent') projectedContent!: ElementRef;

  ngAfterContentChecked() {
    // This hook will be triggered after content has been checked for changes
    console.log('Content has been checked:', this.projectedContent.nativeElement.innerText);
    this.projectedContent.nativeElement.style.backgroundColor = 'lightgreen';  // Change background color
  }
}
