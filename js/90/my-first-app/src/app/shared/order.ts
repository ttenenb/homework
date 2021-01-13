import { Item} from "./item";
import { Person } from "./person";

export interface Order{
  customer: Person;
  orderDate: string;
  item: Item;
  paid: boolean;
}
