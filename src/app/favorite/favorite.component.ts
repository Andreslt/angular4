import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent { 
  @Input('isFavorite') isFav: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isFav = !this.isFav;
    this.click.emit({newValue: this.isFav});
  }
}

export interface FavoriteChangedEventArgs{
  newValue:boolean
}
