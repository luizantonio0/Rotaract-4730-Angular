import { Component } from '@angular/core';
import { TransparencyCard } from "./components/transparency-card/transparency-card";
@Component({
  selector: 'app-transparency-portal',
  imports: [TransparencyCard],
  templateUrl: './transparency-portal.html',
  styleUrl: './transparency-portal.css'
})
export class TransparencyPortal {
  arrCards: TransparencyCard[] = []
  constructor(){
    for (let i = 0; i < 10; i++) {
    this.arrCards.push({title: "ATAS DAS REUNIÕES", description: "Selecione a gestão desejada:", linksCard: [{linkName: "Gestão 2025/2026", linkHref: "/about-us"}, {linkName: "TEStestse", linkHref: "#"}]})
  }
  }
  
    
  
}
