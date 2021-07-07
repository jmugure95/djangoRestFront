import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import {CountyShpService} from './county-shp.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {
  BaseUrl = 'http://127.0.0.1:8000/incidences/';

  constructor( private httpClient: HttpClient,
               private popupService: PopupService,
               private countyService: CountyShpService) {
    this.countyService.addCountyShp().subscribe(
      data => {
        for (const d of data.features){
          console.log('Polygon:', typeof(d.geometry.coordinates));
          console.log('County Name:', d.properties.county_nam);
        }
      });
  }

  getIncidences(map: L.map): void{
    this.httpClient.get(this.BaseUrl).subscribe(
      (data: any) => {
        for (const c of data.features) {
          console.log(c);
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon]);
          console.log('my marker', marker);
          // d3.geoContains(marker);
          marker.bindPopup(this.popupService.showPopup(c.properties, c.geometry));
          marker.addTo(map);
        }
      }
    );
  }
}
