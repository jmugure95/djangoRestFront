import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { IncidenceService } from '../incidence.service';

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
    // this.incidenceService.getIncidences(this.map);
  }

}
