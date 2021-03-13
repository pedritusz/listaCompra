import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ButtonClass } from 'src/app/classes/button';
import { ShoppingListInteface } from 'src/app/interfaces/shopping-list.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  newShoppingList = "newShoppingList"

  constructor(public dashboardService: DashboardService, public router:Router) { }

  ngOnInit(): void {
    this.dashboardService.getUserProducts();
  }
  buttonAction($event) {
    switch ($event) {
      case 'newShoppingList':
        this.router.navigate(['createList']);  
      //this.dashboardService.createNewShoppingList();
        break;
      

      default:
        break;
    }
  }

}
