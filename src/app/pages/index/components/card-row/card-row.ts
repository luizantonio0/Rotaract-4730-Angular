import { Component } from '@angular/core';
import { CardLinks } from "./card-links/card-links";

@Component({
  selector: 'app-card-row',
  imports: [CardLinks],
  templateUrl: './card-row.html',
  styleUrl: './card-row.css'
})
export class CardRow {
  
  cardList: Card[] = [
    { name: "PROJETOS", image: "./foto-membro-raphael.png", link: "/projects" },
    { name: "PODCAST", image: "./foto-membro-laura.png", link: "/podcast"},
    { name: "ASSOCIADOS", image: "./foto-membro-arthur.png", link: "/members" }
  ]
}
type Card = {
    name: string
    image: string
    link: string
}