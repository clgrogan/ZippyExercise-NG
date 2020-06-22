import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  getOrders() {
    // This method emulates a call to an end point returning
    // formatted data
    return [
      {
        section: "Shipping",
        details: [
          { title: "Ship To", data: "Jenna James" },
          { title: "Date Shipped", data: "TBD" },
          { title: "Courier", data: "UPS" },
          { title: "Street Addr", data: "8111 W. Some St." },
          { title: "City", data: "Tampa" },
          { title: "State", data: "FL" },
          { title: "Zip Code", data: 33607 },
        ],
      },
      {
        section: "Billing",
        details: [
          { title: "Name", data: "Don Juan" },
          { title: "Total", data: "$100.00" },
          { title: "Amount Paid", data: "$50.00" },
          { title: "Balance", data: "$50.00" },
          { title: "Payment Method", data: "CC" },
        ],
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
