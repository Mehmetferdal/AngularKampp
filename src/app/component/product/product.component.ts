import { Component, OnInit } from '@angular/core';
//import { Product } from 'src/app/models/Product';
import { HttpClient } from '@angular/common/http'; //api bağlanmak için kullanılan import
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private productService:ProductService, 
    private activateRoute:ActivatedRoute) {} //httpclient türünde bi nesne istiyorumm anlamına geliyor

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded=true;
    });

  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded=true;
    });

  }
}
