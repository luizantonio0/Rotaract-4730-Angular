import { Injectable } from '@angular/core';
import { DefaltURLs } from './RequestURL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberData } from '../models/MemberData';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  defaultUrl = new DefaltURLs()
  private data!: MemberData | any

  constructor(private http: HttpClient){}


  getAll(path: string): Observable<MemberData> {
    this.data = this.http.get<MemberData>(this.defaultUrl.DEFAUT_ROUTE + path)

    return this.data;
  }
}
