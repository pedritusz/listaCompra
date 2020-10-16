import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ButtonClass } from 'src/app/classes/button';
import { ShoppingListInteface } from 'src/app/interfaces/shopping-list.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  newListButton = new ButtonClass('create new product', 'newProduct', '#28a745', undefined, 'white');

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getUserProducts();
  }
  buttonAction($event) {
    switch ($event) {
      case 'newShoppingList':
        this.dashboardService.createNewShoppingList($event);
        break;

      default:
        break;
    }
  }

}
