import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoOracion } from '../models/pedidooracion';

@Injectable({
  providedIn: 'root'
})
export class PedidoOracionService {

  PedidoOracionURL ='http://localhost:9090/oracion/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<PedidoOracion[]> {
    return this.httpClient.get<PedidoOracion[]>(this.PedidoOracionURL + 'listado');
  }

  public detail(id: number): Observable<PedidoOracion>{
    return this.httpClient.get<PedidoOracion>(this.PedidoOracionURL +  `detail/${id} `);

  }
  public detailName(nombre: string): Observable<PedidoOracion>{
    return this.httpClient.get<PedidoOracion>(this.PedidoOracionURL +  `detailname/${nombre} `);

  }
  public save(pedidooracion: PedidoOracion): Observable<any> {
    return this.httpClient.post<any>(this.PedidoOracionURL +'create',pedidooracion);


  }
  public update(id: number ,pedidooracion: PedidoOracion): Observable<any>{
    return this.httpClient.put<any>(this.PedidoOracionURL +`update/${id}`,pedidooracion);

  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.PedidoOracionURL +`delete/${id}`);
  }
}
