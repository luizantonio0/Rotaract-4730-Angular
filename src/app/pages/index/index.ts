import { Component } from '@angular/core';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Apresentation } from "./components/apresentation/apresentation";
import { CardRow } from "./card-row/card-row";

@Component({
  selector: 'app-index',
  imports: [NavBar, Apresentation, CardRow],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  links :string[] = [
    "#",
    "products",
    "sasa"
  ]
}
