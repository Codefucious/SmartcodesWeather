import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = 'https://api.openweathermap.org/data/2.5';
const APP_ID = '555bafb41217b157a36e3e6e0c2c3174';
@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  constructor(private httpClient: HttpClient , ) { }

  getProductsAndServices() {
    return this.httpClient.get(API_URL + '/index.php/api/get_products_and_services' );
  }

  getCurrentWeather() {
    return this.httpClient.get(API_URL + '/group?id=160263,160196,161325,152224,159071,161290,153209,154380,160961,157738&units=metric&appid=' + APP_ID );
  }
}
