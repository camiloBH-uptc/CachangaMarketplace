import { Component, OnInit } from '@angular/core';

import {Product} from '../../models/products'

import { ProductsService } from '../../services/products.service' 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Product[] = [];
  
 

  constructor( private productsService: ProductsService) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
        console.log( "productos",this.products);
      },
      err => console.log(err)
    );
  }

  
  deleteProduct(id: string){

    this.productsService.deleteProduct(id).subscribe(
      res => {
        console.log(res);
        this.getProducts();
      },
      err => console.log(err) 
    );
    this.getProducts();
  }
  
  activateProduct(id: string, product){
    this.productsService.activateProduct(id,product).subscribe(
      res => {
        console.log(res);
        this.getProducts();
      },
      err => console.log(err) 
    );
    this.getProducts();
  }

  editProduct(id: string){
    console.log(id);
  }

}
