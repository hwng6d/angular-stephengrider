import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = 'Lorem ipsum bla bloh';
  enteredText = '';

  onTextInput(event: any) {
    this.enteredText = event.target.value;
  }

  getResultEachLetter(letter: string, index: number) {
    if (!this.enteredText.split('')[index]) {
      return 'pending';
    }
    return letter === this.enteredText.split('')[index] ? 'correct' : 'incorrect';
  }

  getIsSuccessStatus() {
    return this.enteredText === this.randomText;
  }
}
