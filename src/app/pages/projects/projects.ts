import { Component } from '@angular/core';
import { NavBar } from "../index/components/nav-bar/nav-bar";
import { Footer } from "../index/components/footer/footer";

@Component({
  selector: 'app-projects',
  imports: [NavBar, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
