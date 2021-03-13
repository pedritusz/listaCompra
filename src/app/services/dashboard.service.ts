import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../enums/env.enum';
import { Router } from '@angular/router';
import { ProductInterface } from '../interfaces/product.interface';
import { GetProductsInterface } from '../interfaces/get-products';
import { ItemProductListInterface } from '../interfaces/item-product-list.interface';
import { ItemProductForListClass } from '../classes/item-product-for-list-class';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  userProducts: ProductInterface[];
  productsForList: ItemProductForListClass[] = [];
  constructor(public http: HttpClient, public router: Router) { }

  getUserProducts() {
    this.http.get(`${Environment.development}/products?token=${sessionStorage.getItem('userToken')}`).subscribe((res: GetProductsInterface) => {

      this.userProducts = res.products;
      for (const product of res.products) {
        const itemProduct = new ItemProductForListClass(product);
        this.productsForList.push(itemProduct);
      }

    });
  }
  createNewShoppingList() {

    this.router.navigate(["createList"]);

  }
 

}
