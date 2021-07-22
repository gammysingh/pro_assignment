import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    try {
      const apiUrl =  'https://jsonplaceholder.typicode.com/photos';
      return this.http.get(apiUrl);
    } catch (error) {
      console.log(error); 
    }
  }



}
