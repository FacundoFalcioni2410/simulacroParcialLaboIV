import { Movie } from './../classes/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  APIKEY: string = '194455130f2dd427bf238f34d9710740';
  COUNTRYAPIKEY: string = 'c5b93f59bbfa227d88e0e02d916bf9ca';

  constructor(private http: HttpClient) {

  }

  getCountries() {
    return this.http.get('https://restcountries.com/v2/alpha?codes=arg,cl,pe,mx');
    // return this.http.get(`http://api.countrylayer.com/v2/region/americas?access_key=${this.COUNTRYAPIKEY}`);
  }

  getMovies(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.APIKEY}&language=es&append_to_response=images`);
  }
}
