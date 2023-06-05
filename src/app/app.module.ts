import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';//S4 - Capitulo 42 - Crear un componente manualmente
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { heroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
//import { DbzModule } from './dbz_1/dbz.module';//S5 - Capitulo 57 - Módulo DBZ
import { DbzModule } from './dbz/dbz.module';//S5.2 - Capitulo 54 - Módulo DBZ

@NgModule({
  declarations: [
    AppComponent
    //ContadorComponent,//S4 - Capitulo 42 - Crear un componente manualmente
    //HeroeComponent,//S4 - Capitulo 43 - Componente Heroe y se paracion de directorios
    //ListadoComponent//S4 - Capitulo 46 - Crear componente de forma automática
  ],
  imports: [
    BrowserModule,
    heroesModule,//S4 - Capitulo 50 - Módulos
    ContadorModule,//S4 - Capitulo 51 - Módulos - Segunda parte
    //DbzModule//S5 - Capitulo 57 - Módulo DBZ
    DbzModule//S5.2 - Capitulo 54 - Módulo DBZ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
