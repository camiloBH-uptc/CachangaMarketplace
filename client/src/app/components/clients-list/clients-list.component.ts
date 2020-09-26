import { Component, OnInit } from '@angular/core';

import {Clients} from '../../models/clients'

import {ClientsService} from '../../services/clients.service'

import { from } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Clients[] = [];
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getclients();
  }


  getclients(){
    this.clientsService.getClients().subscribe(
      res => {
        this.clients =res;
        console.log(this.clients);
      },
      err => console.log(err)

    );
  }

  deleteClient(id: string){
    this.clientsService.deleteclient(id).subscribe(
      res => {
        console.log(res);
        this.getclients();
      },
      err => console.log(err)
    );
  }

}
