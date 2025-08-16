import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private DEFAULT_URL: string = "http://localhost:8080/"

  constructor(private http: HttpClient){}


  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(this.DEFAULT_URL + path)
  }
}
