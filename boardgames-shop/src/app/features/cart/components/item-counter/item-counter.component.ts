import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
})
export class ItemCounterComponent {
  @Input() quantity: number = 1;

  @Output() quantityChange = new EventEmitter<number>();

  updateQuantity(quantity: number): void {
    if (quantity >= 1) {
      this.quantityChange.emit(quantity);
    }
  }
}
