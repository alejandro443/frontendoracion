import { Component, OnInit } from '@angular/core';
import { PedidoOracion } from '../models/pedidooracion';
import { Persona } from '../models/persona';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  pedidooracion: PedidoOracion[]=[];
  personas: Persona[]=[];

  constructor(private datosservise:DatosService) { }

  ngOnInit(): void {
  this.cargarPersona();
  this.cargarpedido();
  }

  cargarpedido(): void {
    this.datosservise.lista().subscribe(
      data => {
        this.pedidooracion = data;
      },
      err => {
        console.log(err);
      }
    );
  }


  cargarPersona(): void {
    this.datosservise.listas().subscribe(
      data => {
        this.personas = data;
      },
      err => {
        console.log(err);
      }
    );
  }







}
