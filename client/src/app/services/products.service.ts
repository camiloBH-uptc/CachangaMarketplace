import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import {Observable, throwError} from "rxjs";
import { map } from 'rxjs/operators';
import { Product } from '../models/products'
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API_URI}/products`);
  }

  getProductsA(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API_URI}/products/a`);
  }


  getProduct(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  saveProduct(product: Product ){
      return this.http.post(`${this.API_URI}/products`, product);
  }
  subirImagen(image:File,id):Observable<Product>{
    let formData = new FormData();
    formData.append("image",image);
    formData.append("id",id);
    return this.http.post(`${this.API_URI}/upload/`,formData).pipe(
      map((response:any)=>response.product as Product),
      catchError(e=>{
        console.error(e);
        return throwError(e);
      })
    );
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  activateProduct (id: string, updatedProduct: Product){
    return this.http.put(`${this.API_URI}/products/state/${id}`, updatedProduct);
  }
  updateProduct(id: string|number, updatedProduct: Product){
    return this.http.put(`${this.API_URI}/products/${id}`, updatedProduct);
  }

}
