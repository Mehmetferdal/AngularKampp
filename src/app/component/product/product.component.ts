import { Component, OnInit } from '@angular/core';
//import { Product } from 'src/app/models/Product';
import { HttpClient } from '@angular/common/http'; //api bağlanmak için kullanılan import
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // }
  //productResponseModel:ProductResponseModel={};
  constructor(private productService:ProductService) {} //httpclient türünde bi nesne istiyorumm anlamına geliyor

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded=true;
    });
  }
}
