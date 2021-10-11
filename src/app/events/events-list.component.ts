import { Component } from '@angular/core';

@Component({
  selector: `events-list`,
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail #thumbnail
      [event]="event1"></event-thumbnail>
      <event-thumbnail [event]="event2"></event-thumbnail>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()" >Log me</button>
    </div>
  `,
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular kickOff',
    date: '09/10/2021',
    time: '10.00  am',
    price: 99.99,
    imageUrl: '/assets/images/angualrconnect-shield.png',
    location: {
      address: 'ITC Grand Chola',
      city: 'Chennai',
      country: 'India',
    },
  };

  event2 = {
    id: 1,
    name: 'Angular connect',
    date: '09/10/2021',
    time: '10.00  am',
    price: 99.99,
    imageUrl: '/assets/images/angualrconnect-shield.png',
    location: {
      address: 'ITC Grand Chola',
      city: 'Chennai',
      country: 'India',
    },
  };


}
