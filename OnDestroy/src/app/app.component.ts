import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  isVisible = true;  // To control component visibility

  
  message: string = 'Waiting for data...';
  private subscription!: Subscription;

  constructor() {
    const dataObservable = new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next('Data received after 3 seconds!');
      }, 3000);
    });

    this.subscription = dataObservable.subscribe((data) => {
      this.message = data;  
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();  
      console.log('Component destroyed and subscription cleaned up!');
    }
  }
  toggleVisibility() {
    this.isVisible = !this.isVisible;  // This will remove and add the component to the DOM
  }
}
