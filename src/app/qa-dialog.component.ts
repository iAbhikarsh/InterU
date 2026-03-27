import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface QaDialogData {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-qa-dialog',
  templateUrl: './qa-dialog.component.html'
})
export class QaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<QaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QaDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.data.question.trim() && this.data.answer.trim()) {
      this.dialogRef.close(this.data);
    }
  }
}
