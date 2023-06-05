import { Component, Input } from '@angular/core';
import { Personaje } from '../Interfaces_1/dbz_1.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes_1.component.html'
})
export class PersonajesComponent {

  @Input() personajes: Personaje[] = [];
}
