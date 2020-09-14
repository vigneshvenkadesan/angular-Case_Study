import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users= [
    {

      id:1,
      name: 'Dosa',
      type: 'Vegetarian'
  
  },
  {

    id:2,
    name: 'Chicken 65',
    type: 'Non Vegeterian'
  
},
{

  id:3,
  name: 'Idly',
  type: 'Vegeterian'

}
  ];

  constructor(private orderService: OrderService) { }

  
  addNew(data){
    this.users.push(data);
    console.log(data);
  }
  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(users => this.users = this.users);
  }
}
