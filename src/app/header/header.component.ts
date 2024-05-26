import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  displayContactame: boolean = false;
  nombre: string = '';
  email: string = '';
  mensaje: string = '';


  enviarCorreo() {
    console.log(this.nombre);
    console.log(this.email);
    console.log(this.mensaje);
    this.displayContactame = false;
  }
}
