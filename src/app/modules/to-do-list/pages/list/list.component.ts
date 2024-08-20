import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from "../../components/input-add-item/input-add-item.component";
import { IListItems } from "../../interface/ilist-items";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true)

  #setListItems = signal<IListItems[]>(this.#parseItems())
  getListItems = this.#setListItems.asReadonly()

  #parseItems() {
    return JSON.parse(localStorage.getItem('@my-list') || '[]')
  }

  public getInputAddItem(value: IListItems) {
    localStorage.setItem('@my-list', JSON.stringify([...this.#setListItems(), value]))
    return this.#setListItems.set(this.#parseItems())
  }

  public deleteAllItems() {
   localStorage.removeItem('@my-list')
    return this.#setListItems.set(this.#parseItems())
  }
}
