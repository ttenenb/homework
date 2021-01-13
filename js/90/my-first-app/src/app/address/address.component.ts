import { Component, Input } from '@angular/core';
import { Address } from '../shared/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent  {
  @Input()
  address:Address
}
