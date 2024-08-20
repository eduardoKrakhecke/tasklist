import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import { IListItems } from "../../interface/ilist-items";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

  #cdr = inject(ChangeDetectorRef)

  @ViewChild("inputText") public inputText!: ElementRef

  @Input({ required: true }) public inputListItems:IListItems[] = []
  @Output() public outputListItems = new EventEmitter<IListItems>()

   public focusAndAddItem(value: string) {
     if(value) {
       this.#cdr.detectChanges()
       this.inputText.nativeElement.value = ''

       const newDate = new Date()
       const timestamp = newDate.getTime()
       const id = `ID ${timestamp}`

       this.outputListItems.emit({
         id,
         checked: false,
         value
       })
       return this.inputText.nativeElement.focus()
     }
   }
}
