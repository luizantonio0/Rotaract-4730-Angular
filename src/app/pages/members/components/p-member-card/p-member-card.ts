import { Component, Input } from '@angular/core';
import { CardModule } from "primeng/card";


@Component({
  selector: 'app-p-member-card',
  imports: [CardModule],
  templateUrl: './p-member-card.html',
  styleUrl: './p-member-card.css'
})
export class PMemberCard {
  @Input() name!: string
  @Input() description!: string
  @Input() image: string = "/foto-grupo-rotaract-about-us.png"
  @Input() role: string = "Membro"
}
