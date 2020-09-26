import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http' 
import {Observable} from "rxjs";
import { Clients } from '../models/clients' 

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Clients[]>{
    return this.http.get<Clients[]>( `${this.API_URI}/clients`);
  }

  getclient(id: string): Observable<Clients>{
    return this.http.get<Clients>(`${this.API_URI}/clients/${id}`);
  }

  saveClient(client: Clients ){
      return this.http.post(`${this.API_URI}/clients`, client);
  }


  deleteclient(id: string){
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }

  UpdateClient(id: string, updatedClient: Clients){
    return this.http.put(`${this.API_URI}/products/${id}`, updatedClient);
  }
}
