import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  index = 1;

  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Chile', [
      new Respuesta('Concepcion', 0),
      new Respuesta('Santiago', 1),
      new Respuesta('Arica', 0),
      new Respuesta('Puerto Montt', 0),
    ]),
    new Pregunta('Que le paso a lupita', [
      new Respuesta('Fue a comprar cigarros', 0),
      new Respuesta('Se la raptaron los ovnis', 0),
      new Respuesta('Le gusta el webeo', 1),
      new Respuesta('Anda cazando camarones', 0),
    ]),
    new Pregunta('Cuales son los colores de la bandera de Chile', [
      new Respuesta('Verde amarillo y rojo', 0),
      new Respuesta('Blanco rojo rojo', 0),
      new Respuesta('Blanco rojo azul', 0),
      new Respuesta('Azul blanco rojo ', 1),
    ]),
    // new Pregunta('Cual es la capital de Chile', [
    //   new Respuesta('Concepcion', 0),
    //   new Respuesta('Santiago', 1),
    //   new Respuesta('Arica', 0),
    //   new Respuesta('Puerto Montt', 0),
    // ]),
  ];

  constructor() {}

  getPreguntas(){
    return this.preguntas.slice()
  }
}
