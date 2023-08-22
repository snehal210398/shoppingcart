import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product:any;

  constructor(private productService: ProductsService){}

  ngOnInit(){
    
  }
  addProduct(){
    this.productService.setProduct(this.product);
  }
}
