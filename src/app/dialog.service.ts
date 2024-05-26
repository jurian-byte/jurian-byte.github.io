import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private displayDialogSource = new BehaviorSubject<boolean>(false);
  currentDialogState = this.displayDialogSource.asObservable();

  constructor() { }

  showDialog(): void {
    this.displayDialogSource.next(true);
  }

  hideDialog(): void {
    this.displayDialogSource.next(false);
  }
}
