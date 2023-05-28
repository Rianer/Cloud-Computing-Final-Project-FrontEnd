import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/orders/order.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  orderList: Order[];
  usersList: User[];

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.refreshDashData();
  }

  refreshDashData() {
    this.getAllOrders();
    this.getAllUsers();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orderList = res;
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.usersList = res;
    });
  }
}
