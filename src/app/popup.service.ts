import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountyShpService } from './county-shp.service';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  countyNames = Array();

  constructor(private countyShpService: CountyShpService) {

    // this.countyShpService.addCountyShp().subscribe(data => {
    //   data.features.forEach( feature => {
    //     this.countyNames.push(feature.properties.county_nam);
    //   });
    // });

    // console.log('madness', this.countyNames);
  }

  showPopup(dataFromGeoJSON: any, here: any): any{

    return '' +
      `<div>Disease Name: ${ dataFromGeoJSON.name }</div>` +
      `<div>County Name: ${ here.type }</div>`;
  }
}
