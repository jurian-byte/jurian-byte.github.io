// email.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, subject: string, body: string): Observable<any> {
    const email = { name, subject, body };
    return this.http.post('https://frozen-lowlands-04435-a5bc50d88e2b.herokuapp.com/send-email', email);
  }
}
