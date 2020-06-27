import { Component, OnInit } from '@angular/core';
import {ApiServerService} from '../api-server.service';

@Component({
  selector: 'app-weather-cards-desktop',
  templateUrl: './weather-cards-desktop.component.html',
  styleUrls: ['./weather-cards-desktop.component.css']
})
export class WeatherCardsDesktopComponent implements OnInit {

  breakpoint = 4;
  citiesData: any;
  constructor(private weatherAPiService: ApiServerService) { }



  ngOnInit() {

    this.weatherAPiService.getCurrentWeather().subscribe(
      data => {
        console.log(data);
        this.citiesData = data.list ;
      });

  }

  onResize(event) {

    // this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    // this.breakpoint = (event.target.innerWidth <= 425) ? 2 : 6;
    // this.breakpoint = (event.target.innerWidth <= 600) ? 3 : 6;
    // this.breakpoint = (event.target.innerWidth <= 1000) ? 4 : 6;
    if (event.target.innerWidth <= 768) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 1632) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 5;
    }
  }

}
