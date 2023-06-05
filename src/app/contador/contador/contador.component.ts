// S4 - Capitulo 42 - Crear un componente manualmente
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',//app para indicar que es personalizado
    template: `
        <h1>{{ Titulo }}</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <button (click)="acumular( base )">+ {{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)="acumular(- base)">- {{ base }}</button>
    `
})
export class ContadorComponent{
    Titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;//TAREA S4-C41
  
    acumular( valor: number){
      this.numero += valor;
    }
}