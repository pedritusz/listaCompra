import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../enums/env.enum';
import { Router } from '@angular/router';
import { ShoppingListInteface } from '../interfaces/shopping-list.interface';
import { GetShoppingListInterface } from '../interfaces/get-shopping-lists-interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  shoppingLists: ShoppingListInteface[];
  constructor(public http: HttpClient, public router: Router) { }

  getShoppingLists() {
    this.http.get(`${Environment.development}/lists?token=${sessionStorage.getItem('userToken')}`).subscribe((res:GetShoppingListInterface) => {
      
     this.shoppingLists = res.userList;

    });
  }
  createNewShoppingList(route) {
  this.router.navigate([route]);
  }

}
