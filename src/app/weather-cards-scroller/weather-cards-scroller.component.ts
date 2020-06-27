import { Component, OnInit } from '@angular/core';
import {ApiServerService} from '../api-server.service';

@Component({
  selector: 'app-weather-cards-scroller',
  templateUrl: './weather-cards-scroller.component.html',
  styleUrls: ['./weather-cards-scroller.component.css']
})

// Independent component to get and display weather info for cities on mobile
export class WeatherCardsScrollerComponent implements OnInit {

  // Holds requested data for cities
  citiesData: any;
  constructor(private weatherAPiService: ApiServerService) { }


// On initialization get cities weather data
  ngOnInit() {

    // Uses api service to get data and subscribe any changes to holderVariable
    this.weatherAPiService.getCurrentWeather().subscribe(
      ( data: any) => {
        console.log(data);
        this.citiesData = data.list ;
      });

  }
}
