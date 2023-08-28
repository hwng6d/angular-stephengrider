import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  price: string;
  jsonContent: object;
  height: number;
  miles: number;

  constructor() {
    this.name = '';
    this.date = '';
    this.price = '';
    this.jsonContent = { title: 'this title', content: 'this content' };
    this.height = 0;
    this.miles = 0;
  }

  onMilesInput(event: any) {
    this.miles = parseFloat(event.target.value);
  }

  onHeightInput(event: any) {
    this.height = parseFloat(event.target.value);
  }

  onJsonInput(event: any) {
    this.jsonContent = event.target.value;
  }

  onPriceInput(event: any) {
    this.price = event.target.value;
  }

  onDateInput(event: any) {
    this.date = event.target.value;
  }

  onNameInput(event: any) {
    this.name = event.target.value;
  }
}
