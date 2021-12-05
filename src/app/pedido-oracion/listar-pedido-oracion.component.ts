import { Component, OnInit } from '@angular/core';
import { PedidoOracion } from '../models/pedidooracion';
import { PedidoOracionService } from '../service/pedido-oracion.service';
@Component({
  selector: 'app-listar-pedido-oracion',
  templateUrl: './listar-pedido-oracion.component.html',
  styleUrls: ['./listar-pedido-oracion.component.css']
})
export class ListarPedidoOracionComponent implements OnInit {

pedidooracion: PedidoOracion[]=[];
  constructor(private pedidoOracionservice: PedidoOracionService) { }

  ngOnInit(): void {
    this.cargarPedidooracion();

  }


  cargarPedidooracion(): void {
    this.pedidoOracionservice.lista().subscribe(
      data => {
        this.pedidooracion = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
