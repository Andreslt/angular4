import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() isActive: boolean;
  @Input() likesCount: number;

  onLiked() {    
    this.likesCount += (this.isActive)? -1: 1;
    this.isActive = !this.isActive;
  }

}
