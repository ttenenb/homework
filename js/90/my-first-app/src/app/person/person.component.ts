import { Component, Input } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent {
  @Input()
  person: Person;

}
