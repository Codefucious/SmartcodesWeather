import { Component, OnInit } from '@angular/core';
import {ApiServerService} from '../api-server.service';

@Component({
  selector: 'app-weather-cards-desktop',
  templateUrl: './weather-cards-desktop.component.html',
  styleUrls: ['./weather-cards-desktop.component.css']
})
export class WeatherCardsDesktopComponent implements OnInit {

  // Holds the number of columns to be displayed depending on screen size
  breakpoint = 4;

  // Holds requested data for cities
  citiesData: any;
  constructor(private weatherAPiService: ApiServerService) { }


// On initialization get cities weather data
  ngOnInit() {

    this.weatherAPiService.getCurrentWeather().subscribe(
      (data: any ) => {
        console.log(data);
        this.citiesData = data.list ;
      });

  }

  // called when screen is resized to make it responsively alter the number of columns
  onResize(event) {

    if (event.target.innerWidth <= 768) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 1632) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 5;
    }
  }

}
