import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password;
  length;
  isIncludeSymbol;
  isIncludeLetter;
  isIncludeNumber;

  constructor() {
    this.password = '';
    this.length = 0;
    this.isIncludeSymbol = false;
    this.isIncludeLetter = false;
    this.isIncludeNumber = false;
  }

  onLengthInput(event: Event) {
    if (!Number.isNaN(parseInt((event.target as HTMLInputElement).value))) {
      this.length = parseInt((event.target as HTMLInputElement).value);
      console.log(this.length);
    }
  }

  onUseLetterChange() {
    this.isIncludeLetter = !this.isIncludeLetter;
  }

  onUseNumberChange() {
    this.isIncludeNumber = !this.isIncludeNumber;
  }

  onUseSymbolChange() {
    this.isIncludeSymbol = !this.isIncludeSymbol;
  }

  onButtonClick = () => {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
    let pazz = "";

    let validString = "";
    if (this.isIncludeLetter) validString += letters;
    if (this.isIncludeNumber) validString += numbers;
    if (this.isIncludeSymbol) validString += symbols;

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validString.length);
      pazz += validString[index];
    }
    this.password = pazz;
  }
}
