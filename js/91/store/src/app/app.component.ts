import { Component } from '@angular/core';
import { Category } from 'src/shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'PCS store';
  categories: Category[] = [{
    title: 'tech',
    items: [{ name: 'Laptop', price: 500 }, { name: 'printer', price: 250 }]
  }, {
    title: 'groceries',
    items: [{ name: 'flour', price: 3 }, { name: 'yeast', price: 4 }]
  }, {
    title: 'tools',
    items: [{ name: 'wrench', price: 20 }, { name: 'screwdriver', price: 7 }]
    },
    { title: 'software', items: [] }
  ]
}
