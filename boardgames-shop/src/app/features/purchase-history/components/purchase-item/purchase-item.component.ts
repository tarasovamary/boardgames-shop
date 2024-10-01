import { Component, Input } from '@angular/core';
import { Purchase } from '../../../../core/models/purchase.model';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrl: './purchase-item.component.scss',
})
export class PurchaseItemComponent {
  @Input({ required: true }) item!: Purchase;
}
