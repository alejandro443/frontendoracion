import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PedidoOracion } from '../models/pedidooracion';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  personaURL ='http://localhost:9090/persona/';
  PedidoOracionURL ='http://localhost:9090/oracion/';
//  private enviarMensajeSubject = new ;
 // enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor(private httpClient: HttpClient) { }


  public listas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'listar');
  }

  public lista(): Observable<PedidoOracion[]> {
    return this.httpClient.get<PedidoOracion[]>(this.PedidoOracionURL + 'listado');
  }



}
