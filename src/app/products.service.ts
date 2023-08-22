import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  selectedProduct: product[] = [];
  product$ = new BehaviorSubject<product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<product[]>('https://fakestoreapi.com/products');
  }
  setProduct(product: product) {
    this.selectedProduct.push(product);
    this.product$.next(this.selectedProduct);
  }

  removeProduct(removedproduct: product) {
    this.selectedProduct = this.selectedProduct.filter((product) => {
      if (product.id === removedproduct.id) {
        return false;
      } else {
        return true;
      }
    });
    this.product$.next(this.selectedProduct);
  }
}
