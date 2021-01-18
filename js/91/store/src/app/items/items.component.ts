import { Component, Input } from '@angular/core';
import { Item } from 'src/shared/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent {
  @Input()
  items: Item[];


}
