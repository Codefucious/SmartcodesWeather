import { Component, OnInit } from '@angular/core';
import {ApiServerService} from '../api-server.service';

@Component({
  selector: 'app-weather-cards-scroller',
  templateUrl: './weather-cards-scroller.component.html',
  styleUrls: ['./weather-cards-scroller.component.css']
})
export class WeatherCardsScrollerComponent implements OnInit {

  breakpoint: number;
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
    } else if (event.target.innerWidth <= 1232) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 5;
    }
  }
}
