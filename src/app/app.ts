import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./pages/index/components/nav-bar/nav-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public router: Router){
  console.log(this.showBackground());
  }
  showBackground(): boolean{
    const routsWithBackground = ['/']
    return routsWithBackground.includes(this.router.url);
  }
  protected title = 'rotaract';
}
