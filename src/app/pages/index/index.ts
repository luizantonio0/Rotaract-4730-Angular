import { Component } from '@angular/core';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Apresentation } from "./components/apresentation/apresentation";
import { CardRow } from "./components/card-row/card-row";
import { Copywriting } from "./components/copywriting/copywriting";
import { RotaractData } from "./components/rotaract-data/rotaract-data";

@Component({
  selector: 'app-index',
  imports: [NavBar, Apresentation, CardRow, Copywriting, RotaractData],
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
