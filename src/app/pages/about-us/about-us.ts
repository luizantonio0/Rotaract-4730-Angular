import { Component } from '@angular/core';
import { NavBar } from "../index/components/nav-bar/nav-bar";
import { Footer } from "../index/components/footer/footer";

@Component({
  selector: 'app-about-us',
  imports: [NavBar, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
