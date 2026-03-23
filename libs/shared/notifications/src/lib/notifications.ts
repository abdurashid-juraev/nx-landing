import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageService = inject(MessageService);

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Muvaffaqiyatli!',
      detail: message
    });
  }
  showWarn(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Diqqat!',
      detail: message
    });
  }
  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Xatolik!',
      detail: message
    });
  }
}
