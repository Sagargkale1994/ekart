import { Component, OnInit } from '@angular/core';
import { product } from '../models/products';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:product[] = [] ;
  constructor(private productData:HttpServiceService) { }
 
  ngOnInit(): void {
    this.getProDetails();
  }

  getProDetails(){
    this.productData.getData("productsitems").subscribe((ele:any)=>{
      this.productList = ele;
      console.log("Product Data ",this.productList);
      console.log(ele);
    })
  }
}
