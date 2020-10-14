import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css'],
})
export class RespuestaComponent implements OnInit {
  listPreguntas: Pregunta[];
  resultadoRespuestas: any[];

  constructor(
    public preguntaService: PreguntaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listPreguntas = this.preguntaService.preguntas;
    this.resultadoRespuestas = this.preguntaService.respuestasUsuario;
  }

  volver() {
    this.preguntaService.respuestasUsuario = [];
    this.router.navigate(['/']);
  }
}
