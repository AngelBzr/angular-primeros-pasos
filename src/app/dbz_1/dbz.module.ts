import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page_1/main-page.component';
import { PersonajesComponent } from './personajes_1/personajes_1.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [//imports: van todos los módulos
    CommonModule,
    FormsModule
  ]
  
})
export class DbzModule { }
