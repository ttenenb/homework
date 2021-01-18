import { Component, Input } from '@angular/core';
import { Category } from 'src/shared/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent {
  @Input()
  categories: Category[];
  selectedCategory: Category;
  selectedCT:string;

  deleteCategory(categorySelected) {
    this.categories.splice(this.categories.findIndex(c => c.title === categorySelected.innerText.split(' ')[0]), 1);
  }

  add(e, category) {
    e.preventDefault();
    this.categories.push({ title: category, items: [] })
  }

}
