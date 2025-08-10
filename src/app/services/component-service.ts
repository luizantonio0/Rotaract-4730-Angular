import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private DEFAULT_URL: string = "https://rotaract-4730-java.onrender.com/"

  constructor(private http: HttpClient){}


  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(this.DEFAULT_URL + path)
  }
}
