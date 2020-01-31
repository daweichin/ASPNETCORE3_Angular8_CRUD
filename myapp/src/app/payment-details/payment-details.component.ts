import { Component, OnInit } from "@angular/core";
import { PaymentDetailService } from "../services/payment-detail.service";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.component.html",
  styleUrls: ["./payment-details.component.scss"]
})
export class PaymentDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
