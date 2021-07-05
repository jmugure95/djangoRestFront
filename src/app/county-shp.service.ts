import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class CountyShpService {

  baseUrl = 'http://127.0.0.1:8000/county/';

  constructor(private httpClient: HttpClient) { }

  addCountyShp(): any{
    return this.httpClient.get(this.baseUrl);
  }
}
