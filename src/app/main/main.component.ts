import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { IncidenceService } from '../incidence.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [0.023, 36.87],
      zoom: 4
    });

    const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

    osmTiles.addTo(this.map);
    }

  constructor(private incidenceService: IncidenceService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.incidenceService.getIncidences(this.map);
  }

}
