import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router'

import {Product} from '../../models/products'
import {ProductsService} from '../../services/products.service'
import { ChildActivationStart } from '@angular/router';
import { onErrorResumeNext } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 
  product: any = {
    ID: 0,
    PNAME: '',
    DESCRIPTION: '',
    IMAGE: '',
    PRICE: 0,
    GENDER: '',
    COLOR: '',
    SIZE: 0,
    STOCK: 0,
    STATE: '' ,
  };

  edit: boolean = false;

  constructor(private http:HttpClient ,private productsService: ProductsService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.productsService.getProduct(params.id).subscribe(
        res => {
          console.log(res);
          this.product = res[0];
          this.edit = true;
          console.log("this.product 0",this.product);
        },
        err => console.log(err)
      );
    }
  }

  validarProducto(){
    if(!this.product.STOCK ){this.product.errores.push("el stock debe ser mayor a 1");}
    if(!this.product.STATE ){this.product.errores.push("el estado debe estar seleccionado");}
    if(!this.product.PNAME ){this.product.errores.push("el nombre debe estar seleccionado");}
    if(!this.product.ID ){this.product.errores.push("el id debe estar seleccionado");}
    if(!this.product.IMAGE ){this.product.errores.push("el imagen debe estar seleccionado");}
    if(!this.product.PRICE ){this.product.errores.push("el precio debe estar seleccionado");}
    if(!this.product.GENDER ){this.product.errores.push("el genero debe estar seleccionado");}
    if(!this.product.COLOR ){this.product.errores.push("el color debe estar seleccionado");}
    if(!this.product.DESCRIPTION ){this.product.errores.push("el descripcion debe estar seleccionado");}
    if( this.product.errores.length){this.product.errror=1;}; 

    return this.product.error;
  }

  
  updateProduct(){
    this.productsService.updateProduct(this.product.ID, this.product).subscribe(
      res =>{
          console.log(res);
          console.log(this.product);
          this.router.navigate(['/products']);
      },
      err => console.log(err)
    );
  }

  saveNewProduct(){
    this.productsService.saveProduct(this.product).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/products']);
      },
      err => console.log(err)
    );
   
  }

}
