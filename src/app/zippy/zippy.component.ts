import { Component } from "@angular/core";

@Component({
  selector: "zippy",
  templateUrl: "./zippy.component.html",
  styleUrls: ["./zippy.component.css"],
})
export class ZippyComponent {
  expandBilling: boolean = true;
  expandShipping: boolean = true;
  constructor() {}

  onClickBilling = () => {
    this.expandBilling = !this.expandBilling;
  };

  onClickShipping = () => {
    this.expandShipping = !this.expandShipping;
  };
}
