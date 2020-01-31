import { Injectable } from "@angular/core";
import { PaymentDetail } from "../models/payment-detail-model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaymentDetailService {
  public formData: PaymentDetail;
  readonly rootURL = "https://localhost:5001/api";

  list: PaymentDetail[];

  constructor(private http: HttpClient) {
    this.formData = new PaymentDetail();
  }

  postPaymentDetail() {
    return this.http.post(this.rootURL + "/PaymentDetails", this.formData);
  }
  putPaymentDetail() {
    return this.http.put(
      this.rootURL + "/PaymentDetails/" + this.formData.PMId,
      this.formData
    );
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + "/PaymentDetails/" + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/PaymentDetails")
      .toPromise()
      .then(res => (this.list = res as PaymentDetail[]))
      .catch(error => {
        console.log(error);
      });
  }
}
