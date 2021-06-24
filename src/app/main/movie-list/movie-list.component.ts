import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  charities = [];

    constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
      this.apiService.getCharity().subscribe(
        data => {
          this.charities = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }
}
