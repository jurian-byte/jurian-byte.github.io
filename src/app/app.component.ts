import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  scroll(id: string) {
    console.log('Scrolling to:', id);
    const element = document.getElementById(`${id}Wrapper`);
    if (element) {
      console.log('Element found:', element);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('Element not found');
    }
  }




  displayContactame: boolean = false;

  abrirDialogo(): void {
    this.displayContactame = true;
    console.log('Diálogo abierto:', this.displayContactame);
  }


}
