import { Component } from '@angular/core';

@Component({
  selector: `events-list`,
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="event1"
      ></event-thumbnail>
      <event-thumbnail #thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="event2"
      ></event-thumbnail>
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

  handleEventClicked(data: any) {
    console.log('Received:', data);
  }
}
