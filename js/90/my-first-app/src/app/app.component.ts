import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'PCS Orders';
  order = {
    customer: {
      name: 'Tom Johns',
      newCustomer: true,
      address: {
        street: '214 Somewhere Ave',
        city: 'Some City',
        state: 'Any State',
        zip: '12345'
      }
    },
    orderDate: '1/12/2021',
    item: {
      name: 'Laptop',
      price: 500
    },
    paid: true
  }
}
