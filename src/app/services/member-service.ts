import { Injectable } from '@angular/core';
import { DefaltURLs } from './RequestURL';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  defaultUrl = new DefaltURLs()
  getAll(){
    fetch(this.defaultUrl.DEFAUT_ROUTE + "members")
  }
}
