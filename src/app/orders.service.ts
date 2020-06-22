import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  getOrders() {
    return [
      {
        section: "Shipping",
        shipToName: "Jenna James",
        dateShipped: "TBD",
        courier: "UPS",
        addr1: "8111 W. Some St.",
        addr2: null,
        city: "Tampa",
        state: "FL",
        zip: 33607,
      },
      {
        section: "Billing",
        name: "Julie Evans",
        total: 100.0,
        amtPaid: 50.0,
        balance: function () {
          return this.total - this.amtPaid;
        },
        paymentMethod: "CC",
      },
    ];
  }
}
