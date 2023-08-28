import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 1000, label: 'Number of users' },
    { value: 100, label: 'Intergrated systems' },
    { value: 500, label: 'Five stars reviews' },
  ];
  items = [
    { img: 'assets/images/couch.jpg', header: 'A new couch', content: 'Fasdfasdf sadfq sdca qweasd' },
    { img: 'assets/images/dresser.jpg', header: 'A new dresser', content: 'Ads sadfq sdca qweasd' },
  ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
