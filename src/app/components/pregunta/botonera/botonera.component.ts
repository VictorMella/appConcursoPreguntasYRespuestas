import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
})
export class BotoneraComponent implements OnInit {
  btnString = 'Aceptar';
  constructor(
    public preguntaService: PreguntaService,
    private router: Router
  ) {}

  ngOnInit() {}

  siguiente() {
    switch (this.btnString) {
      case 'Aceptar':
        this.preguntaService.confirmada = true;
        this.btnString = 'Siguiente';
        if (
          this.preguntaService.preguntas.length - 1 === this.preguntaService.indexPregunta
        ) {
          this.btnString = 'Finalizar';
        }

        break;
      case 'Siguiente':
        this.preguntaService.indexPregunta++;
        this.preguntaService.respuestasUsuario.push(
          this.preguntaService.indexRespuesta
        );
        this.preguntaService.deshabilitarBtn = true;
        this.preguntaService.confirmada = false;
        this.btnString = 'Aceptar';
        break;
      case 'Finalizar':
        this.preguntaService.respuestasUsuario.push(
          this.preguntaService.indexRespuesta
        );
        this.preguntaService.opcionSeleccionada = null;
        this.preguntaService.confirmada = false;
        this.preguntaService.indexPregunta = 0;
        this.router.navigate(['/respuesta']);
    }
  }
}
