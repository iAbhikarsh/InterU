import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterU';

  questionText = '';
  answerText = '';
  qaList: QaItem[] = [];

  addQa() {
    const question = this.questionText.trim();
    const answer = this.answerText.trim();
    if (!question || !answer) {
      return;
    }

    this.qaList.push({
      question,
      answer
    });

    this.questionText = '';
    this.answerText = '';
  }

  removeQa(index: number) {
    this.qaList.splice(index, 1);
  }
}
