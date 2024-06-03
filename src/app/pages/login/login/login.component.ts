import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';
// import { LoginService } from '../services/login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailerr: string = '';
  passworderr: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient,private router:Router) { }

  onSubmit(): void {
    let error = false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const body = { email: this.email, password: this.password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Validate email
    if (this.email === '') {
      error = true;
      this.emailerr = 'Please enter Email';
    } else if (!emailRegex.test(this.email)) {
      error = true;
      this.emailerr = 'Please enter a valid Email';
    } else {
      this.emailerr = '';
    }

    // Validate password
    if (this.password === '') {
      error = true;
      this.passworderr = 'Please enter Password';
    } else if (this.password.length <= 8) {
      error = true;
      this.passworderr = 'Password must be greater than 8 characters';
    } else {
      this.passworderr = '';
    }

    // If no errors, proceed with the HTTP request
    if (!error) {
      this.http.post('http://127.0.0.1:8000/api/login', body, { headers })
        .pipe(
          map(response => {
            // Handle the response and store the token if login is successful
            if (response) {
              console.log(response, 'response');
            }
            return response;
          })
        )
        .subscribe(
          response => {
            console.log('Login successful', response);
            this.router.navigate(['login/register'])
          },
          error => {
            console.error('Login error', error);
            this.errorMessage = 'Login failed. Please try again.';
          }
        );
    }
  }
}
