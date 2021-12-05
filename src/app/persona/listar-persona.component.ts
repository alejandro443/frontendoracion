
import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

import { PersonaService } from '../service/persona.service';
@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {

personas: Persona[]=[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarPersona();

  }



  cargarPersona(): void {
    this.personaService.lista().subscribe(
      data => {
        this.personas = data;
      },
      err => {
        console.log(err);
      }
    );
  }


}
