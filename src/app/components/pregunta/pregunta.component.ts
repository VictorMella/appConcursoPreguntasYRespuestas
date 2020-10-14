import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[];
  constructor(public preguntaService: PreguntaService) {}

  ngOnInit() {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }
  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if (this.preguntaService.confirmada === true) {
      return;
    }

    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indexRta;
  }

  addClassOptions(respuesta: Respuesta) {
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      !this.preguntaService.confirmada
    ) {
      return 'active text-light';
    }
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.confirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return 'list-group-item-success';
    }

    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.confirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return 'list-group-item-danger';
    }
  }

  iconCorrect(respuesta: Respuesta) {
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.confirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrect(respuesta: Respuesta) {
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.confirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
