//S4 - Capitulo 46 - Crear componente de forma automática
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Superman', 'Flash', 'Aquaman', 'Cyborg', 'Wonder Woman'];
  heroeBorrado: string = "";//S4 - Capitulo 47 - Directiva *ngFor

  borrarHeroe(){
    console.log('Borrando...');

    // this.heroes.length = this.heroes.length - 1;//S4 - Capitulo 47 - Directiva *ngFor
    this.heroeBorrado = this.heroes.shift() || '';//S4 - Capitulo 47 - Directiva *ngFor
    console.log(this.heroeBorrado);//S4 - Capitulo 47 - Directiva *ngFor

  }
}
