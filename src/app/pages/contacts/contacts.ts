import { Component } from '@angular/core';
import { NavBar } from "../index/components/nav-bar/nav-bar";
import { Footer } from "../index/components/footer/footer";

@Component({
  selector: 'app-contacts',
  imports: [NavBar, Footer],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {

}
