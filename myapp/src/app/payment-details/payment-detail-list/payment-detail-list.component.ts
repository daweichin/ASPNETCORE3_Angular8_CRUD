import { Component, OnInit } from "@angular/core";
import { PaymentDetailService } from "src/app/services/payment-detail.service";
import { PaymentDetail } from "src/app/models/payment-detail-model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-payment-detail-list",
  templateUrl: "./payment-detail-list.component.html",
  styleUrls: ["./payment-detail-list.component.scss"]
})
export class PaymentDetailListComponent implements OnInit {
  constructor(
    private service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm("Are you sure you want to delete?")) {
      this.service.deletePaymentDetail(PMId).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning(
            "Deleted Successfully",
            "Payment Detail Register"
          );
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
