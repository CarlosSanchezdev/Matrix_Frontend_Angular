import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { 
  }

  searchBeer({beer}: BeerModel): Observable<any> {

    return this.httpClient.get(`https://api.punkapi.com/v2/beers?food=${beer}`);
  }
}

export class BeerModel {
  beer: string = '';
}