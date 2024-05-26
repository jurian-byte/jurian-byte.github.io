import { Component } from '@angular/core';
import { EmailService } from '../services/private/email.service';
import { MessageService } from 'primeng/api';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [MessageService]
})
export class FooterComponent {
displayContactame: boolean = false;

openDialog() {
    this.displayContactame = true;
}


}
