import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  protected readonly links: string[] =[
    "/about-us",
    "/transparency-portal",
    "/contacts"
  ]
  menuStatus: boolean

  constructor(){
    this.menuStatus = false
  }
  openCloseMenu() :void{
    this.menuStatus = (this.menuStatus)? false : true

    if(this.menuStatus){
      document.getElementById("nav-bar")?.classList.add("translate")
      document.getElementById("menu-links")?.classList.add("translate")
      document.getElementById("menu-btn")?.classList.add("translate")
      return
    }
    document.getElementById("menu-btn")?.classList.remove("translate")
    document.getElementById("nav-bar")?.classList.remove("translate")
    document.getElementById("menu-links")?.classList.remove("translate")
  }
}
