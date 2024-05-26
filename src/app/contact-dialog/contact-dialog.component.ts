import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailService } from '../services/private/email.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})export class ContactDialogComponent {

  name: string = '';
  subject: string = '';
  body: string = '';

  @Input() visible: boolean = false;  // Controla la visibilidad del diálogo
  @Output() visibleChange = new EventEmitter<boolean>();  // Emite cambios al padre

  constructor(
    private emailService: EmailService,
    private messageService: MessageService
  ) {}

  enviarEmail(): void {
    this.emailService.sendEmail(this.name, this.subject, this.body)
      .subscribe(
        response => {
          this.closeDialog();
          this.name = '';
          this.subject = '';
          this.body = '';
          this.messageService.add({
            severity: 'success',
            summary: 'Correo Enviado',
            detail: 'Tu correo ha sido enviado exitosamente'
          });
        },
        error => {
          console.error('Error al enviar correo electrónico:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo enviar el correo'
          });
        }
      );
  }

  closeDialog(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    console.log('Diálogo cerrado');
  }

}
