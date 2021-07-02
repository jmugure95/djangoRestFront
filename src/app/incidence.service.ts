import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {
  BaseUrl = 'http://127.0.0.1:8000/incidences/';

  constructor( private httpClient: HttpClient) { }

  getIncidences(map: L.map): void{
    this.httpClient.get(this.BaseUrl).subscribe(
      (data: any) => {
        for (const c of data.features) {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon]);
          marker.addTo(map);
        }
      }
    );
  }
}
