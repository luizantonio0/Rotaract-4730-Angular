import { Component } from '@angular/core';
import { NavBar } from "../index/components/nav-bar/nav-bar";
import { Footer } from "../index/components/footer/footer";

@Component({
  selector: 'app-transparency-portal',
  imports: [NavBar, Footer],
  templateUrl: './transparency-portal.html',
  styleUrl: './transparency-portal.css'
})
export class TransparencyPortal {

}
