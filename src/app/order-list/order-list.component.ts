import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(public ordersService:OrdersService){}
  ngOnInit() {
    this.getCoffeeOrders();
  }
  coffeeOrders; 

  getCoffeeOrders () {
    this.ordersService.getCoffeeOrders()
    .subscribe(res =>(this.coffeeOrders = res));
  }

  markCompleted(data) {
    console.log('data: ',data)
   return this.ordersService.updateCoffeeOrder(data);
  }

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);


  deleteCoffeeOrder(){
    data => this.ordersService.deleteCoffeeOrder(data);
  }
}