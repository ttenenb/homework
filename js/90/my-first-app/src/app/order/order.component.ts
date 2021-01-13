import { Component, Input } from '@angular/core';
import { Order } from '../shared/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent {

  @Input()
  order: Order
}
