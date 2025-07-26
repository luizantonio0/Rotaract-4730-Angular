import { Component } from '@angular/core';
import { NavBar } from "../index/components/nav-bar/nav-bar";
import { Footer } from "../index/components/footer/footer";
import { AboutUsMainText } from "./components/about-us-main-text/about-us-main-text";

@Component({
  selector: 'app-about-us',
  imports: [NavBar, Footer, AboutUsMainText],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
