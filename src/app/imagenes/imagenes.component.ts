import { Component } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html'
})
export class ImagenesComponent {

  listaCurso: string[] = ['foto1', 'foto2', 'foto3', 'foto4', 'foto5'];

  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}
