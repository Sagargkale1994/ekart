import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getData(endPoint:string){
    return this.http.get(this.baseUrl+endPoint);
  }
}
