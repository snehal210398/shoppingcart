import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() product:any;

  constructor(private productService: ProductsService){}

  removeProduct(){
    this.productService.removeProduct(this.product);
  }
}
