import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
})
export class BotoneraComponent implements OnInit {
  btnString = 'Aceptar';
  constructor(public preguntaService: PreguntaService) {}

  ngOnInit() {}

  siguiente() {
    switch (this.btnString) {
      case 'Aceptar':
        this.preguntaService.confirmada = true;
        this.btnString = 'Siguente';
        // this.preguntaService.index += 1
    }
  }
}
