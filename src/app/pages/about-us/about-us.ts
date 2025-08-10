import { Component } from '@angular/core';
import { AboutUsMainText } from "./components/about-us-main-text/about-us-main-text";
import { Footer } from "../index/components/footer/footer";

@Component({
  selector: 'app-about-us',
  imports: [AboutUsMainText, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

}
