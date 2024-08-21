import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from "../../interface/ilist-items";

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {

  @Input({ required: true}) public inputListItems: IListItems[] = []
  @Output() public outputUpdateItemCheckbox = new EventEmitter<{id: string, checked: boolean}>()
  @Output() public outputUpdateItemText = new EventEmitter<{id: string, value: string}>()
  @Output() public outputDeleteItemText = new EventEmitter()

  public updateItemChebkox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckbox.emit({ id, checked })
  }

  public updateItemText(id: string, value: string) {
    return this.outputUpdateItemText.emit({ id, value })
  }

  public deleteItemText(id: string) {
    return this.outputDeleteItemText.emit( id )
  }

}
