import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'moutainlover',
      content: 'Here is a picture of snowy mountain',
      imageUrl: 'assets/mountain.jpeg'
    },
    {
      title: 'Mountain Biking',
      username: 'biking12222',
      content: 'Action shot of me riding my bike',
      imageUrl: 'assets/biking.jpeg'
    },
  ];
}
