import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/create_charity';

  constructor(private httpClient: HttpClient) { }

  getCharity(): any{
    return this.httpClient.get(this.baseUrl);
 ;
  }
}
