import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    name:'Trunks',
    power: 10
  }]

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();
  // onDelete = Index value: number

  onDeleteCharacter(id?:string):void{
    // console.log(index);
    console.log(id);
    if(!id) return;
    //this.onDelete.emit(index);
    this.onDelete.emit(id);
    
  }

}
