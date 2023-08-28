import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {
  @Input() isIncludeImageHeader = false;
  @Input() headerLines = 2;
  @Input() lines = 3;

  
}
