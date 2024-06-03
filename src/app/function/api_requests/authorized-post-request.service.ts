import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SendAuthorizedRequestService {


  constructor(private http: HttpClient,
   ) { }

   Api='http://127.0.0.1:8000/api'
  userId: any;
  userType: any;
  defaultLanguage: any;


  sendAPIRequest(
    endpoint: string,
    method: 'GET' | 'POST' = 'GET',
    data: any = null,
    queryParams: any = null
  ): Observable<any> {
    const token = localStorage.getItem('token');
    let params = new HttpParams();
    let body = null;
    // Set up query parameters if present
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params = params.append(key, queryParams[key]);
        }
      }
    }
    // Determine whether the data is FormData or JSON, and set the body and headers accordingly
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type':
        data instanceof FormData ? 'multipart/form-data' : 'application/json',
    };
    if (method === 'POST') {
      body = data //instanceof FormData ? data : JSON.stringify(data);
    }
    return this.http.request(method, `${this.Api}${endpoint}`, {
      headers,
      params,
      body,
    });
  }



 

}
