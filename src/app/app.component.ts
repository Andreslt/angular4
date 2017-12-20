import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tweet = {
  //   title: 'app',
  //   isActive: true,
  //   likesCount: 10  
  // }
  // courses=[1,2];
    // viewMode = ""
  // onFavoriteChanged(eventArg: FavoriteChangedEventArgs){
  //   console.log('Favorite Changed: ', eventArg);
  // }
  expanded = true;
}
