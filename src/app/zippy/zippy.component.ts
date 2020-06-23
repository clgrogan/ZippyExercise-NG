import { Component } from "@angular/core";
import { OrdersService } from "../orders.service";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"],
})
export class ZippyComponent {
  expandBilling: boolean = true;
  expandShipping: boolean = true;
  orders: any;
  constructor(service: OrdersService) {
    // Dependency must be registered in the module > Provider.
    // or on rendering will get the ERROR "Error: No provider for CoursesService!"
    // let service = new CoursesService(); // tightly couples instance to the service class implementation
    this.orders = service.getOrders();
  }

  onClickBilling = () => {
    this.expandBilling = !this.expandBilling;
  };

  onClickShipping = () => {
    this.expandShipping = !this.expandShipping;
  };

  onClickToggleDetail = (section) => {
    this.expandShipping = !this.expandShipping;
  };
  toggleDisplay = (display: any) => {
    console.log(display);
    display === "block" ? "none" : "block";
  };
}
