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
  isSubmitting: boolean = false;

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor(
    private emailService: EmailService,
    private messageService: MessageService
  ) {}

  enviarEmail(): void {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;  // Desactiva el botón al comenzar el envío

    this.emailService.sendEmail(this.name, this.subject, this.body)
      .subscribe(
        response => {
          this.isSubmitting = false;
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
          this.isSubmitting = false;
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
