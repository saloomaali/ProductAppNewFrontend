import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  data:any = [{"prd_code":"101","prd_name":"tv","mnf_date":"2022-12-09","exp_date":"2039-12-08","brand":"Samsung","price":35000,"seller_name":"abcd","distr_name":"abcd"}]

}
