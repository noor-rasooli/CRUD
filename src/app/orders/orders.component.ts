import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    public ordersService: OrdersService
  ) { }
  coffeeOrder = [];
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  orderNumber = 0;
  ngOnInit(): void {
  }

  addCoffee(coffee) {
    this.coffeeOrder.push(coffee)
      ;
  }

  removeCoffee(coffee) {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1
      )
    };
  };

  onSubmit() {
    this.incrementOrderNumber()
    localStorage.removeItem('NUMERODEORDER');
    localStorage.setItem('NUMERODEORDER', this.orderNumber);
    //enlever le champ qui va FEED l'order number
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    this.ordersService.form.value.orderNumber = this.orderNumber;

    let data = this.ordersService.form.value;
    console.log(data)
    this.ordersService.createCoffeeOrder(data)
      .then(res => {
        console.log(res);
      });
  }
  incrementOrderNumber() {
    this.orderNumber += 1;
  }
}


