import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  selectedProduct: product[] = [];
  totalPrice: number = 0;
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.product$.subscribe((data) => {
      this.selectedProduct = [...data];
      this.totalPrice = 0;
      if (this.selectedProduct.length > 0) {
        this.selectedProduct.forEach((product) => {
          this.totalPrice = this.totalPrice + +product.price;
        });
      }
    });
  }
}
