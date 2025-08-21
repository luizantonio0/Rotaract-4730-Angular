import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEFAULT_URL } from './defaultURL';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  private DEFAULT_URL: string = new DEFAULT_URL().url 

  constructor(private http: HttpClient){}

  getAll(): Observable<string>{
    return this.http.get<string>(this.DEFAULT_URL)
  }
}
