import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { IncidenceService } from '../incidence.service';
import {CountyShpService} from '../county-shp.service';

// add marker shadow
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
  private county;

  private initMap(): void {
    this.map = L.map('map', {
      center: [0.023, 36.87],
      zoom: 6
    });

    const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

    osmTiles.addTo(this.map);
    }

  // attach mouseover and mouseout events to interact with each of the shapes
  // with onEachFeature:
  private highlightFeature(e): any {
    const layer = e.target;

    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042'
    });
  }

  private resetFeature(e): any {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B'
    });
  }
  private initCountyLayer(): any {
    const countyLayer = L.geoJSON(this.county, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => (this.highlightFeature(e)),
          mouseout: (e) => (this.resetFeature(e)),
        })
      )
    });

    this.map.addLayer(countyLayer);
  }

  constructor(private incidenceService: IncidenceService,
              private countyShpService: CountyShpService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.incidenceService.getIncidences(this.map);
    this.countyShpService.addCountyShp().subscribe(
      (data: any) => {
        this.county = data;
        this.initCountyLayer();
      }
    );
  }

}
