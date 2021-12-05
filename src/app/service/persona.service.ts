import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaURL ='http://localhost:9090/persona/';

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'listar');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.personaURL +  `detail/${id} `);

  }
  public detailName(nombre: string): Observable<Persona>{
    return this.httpClient.get<Persona>(this.personaURL +  `detailname/${nombre} `);

  }
  public save(producto: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL +'create',producto);


  }
  public update(id: number ,persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.personaURL +`update/${id}`,persona);

  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personaURL +`delete/${id}`);
  }

}
