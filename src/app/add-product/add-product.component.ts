import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  prd_code = ""
  prd_name = ""
  mnf_date = ""
  exp_date = ""
  brand = ""
  price = ""
  seller_name = ""
  distr_name = ""

constructor(private api:ApiService){}

  readValue=()=>{

    let data:any = {"prd_code":this.prd_code,"prd_name":this.prd_name,"mnf_date":this.mnf_date,"exp_date":this.exp_date,"brand":this.brand,"price":this.price,"seller_name":this.seller_name,"distr_name":this.distr_name}
    console.log(data)

    this.api.addProduct(data).subscribe(
      (response:any)=>{

        console.log(response)

        if(response.status == "success"){
          alert("Product added successfully")
          this.prd_code = ""
          this.prd_name = ""
          this.mnf_date = ""
          this.exp_date = ""
          this.brand = ""
          this.price = ""
          this.seller_name = ""
          this.distr_name = ""
        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }


}
