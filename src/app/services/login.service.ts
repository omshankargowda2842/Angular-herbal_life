// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your actual Laravel API URL

  // constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { email, password };

    // return this.http.post(`${this.apiUrl}/login`, body, { headers })
    //   .pipe(
    //     map(response => {
    //       // Handle the response and store the token if login is successful
    //       if (response) {
    //         console.log(response, 'response');
    //       }
    //       return response;
    //     })
    //   );
  }
}
