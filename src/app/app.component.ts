import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { QaDialogComponent, QaDialogData } from './qa-dialog.component';

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
  qaList: QaItem[] = [];
  isHandset = false;

  constructor(private dialog: MatDialog, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isHandset = result.matches;
      });
  }

  openAddQaDialog() {
    const dialogRef = this.dialog.open(QaDialogComponent, {
      width: '500px',
      data: { question: '', answer: '' } as QaDialogData
    });

    dialogRef.afterClosed().subscribe((result: QaDialogData | undefined) => {
      if (result && result.question.trim() && result.answer.trim()) {
        this.qaList.push({ question: result.question.trim(), answer: result.answer.trim() });
      }
    });
  }

  removeQa(index: number) {
    this.qaList.splice(index, 1);
  }
}
