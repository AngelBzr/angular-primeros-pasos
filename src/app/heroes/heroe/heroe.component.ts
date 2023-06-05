//S4 - Capitulo 43 - Componente Heroe y se paracion de directorios 
//S4 - Capitulo 44 - Cambios en el template del componente
//S4 - Capitulo 45 - Concepto de one way data binding - nelazado en una sola vía
import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre  : string = 'Superman';//S4 - Capitulo 44 - Cambios en el Template de Componente
    edad    : number = 33;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`
    }
    cambiarNombre(): void{
        this.nombre = 'The Flash';
    }
    cambiarEdad():void{
       this.edad = 25; 
    }
}