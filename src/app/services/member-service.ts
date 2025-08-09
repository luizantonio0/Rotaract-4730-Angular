import { Injectable } from '@angular/core';
import { DefaltURLs } from './RequestURL';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  defaultUrl = new DefaltURLs()



  async getAll(path: string): Promise<any> {
    const response = await fetch(this.defaultUrl.DEFAUT_ROUTE + path);
    const data = await response.json();
    console.log(data)
    return data;
  }
}
