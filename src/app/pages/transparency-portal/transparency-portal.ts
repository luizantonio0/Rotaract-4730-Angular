import { Component, OnInit, signal, Signal } from '@angular/core';
import { TransparencyCard } from "./components/transparency-card/transparency-card";
import { TransparencyData } from '../../models/TransparencyData';
import { ComponentService } from '../../services/component-service';
import { Footer } from "../index/components/footer/footer";
@Component({
  selector: 'app-transparency-portal',
  imports: [TransparencyCard, Footer],
  templateUrl: './transparency-portal.html',
  styleUrl: './transparency-portal.css'
})
export class TransparencyPortal implements OnInit {
  // Criando o Signal
  transparencyCard = signal<TransparencyData[]>([]);

  constructor(private service: ComponentService) {}

  ngOnInit(): void {
    this.service.getAll<TransparencyData>('transparency').subscribe({
      next: (res) => {
        const data = Array.isArray(res) ? res : [res];
        this.transparencyCard.set(data); // Atualiza o Signal
        console.log(this.transparencyCard()); // Lê o valor
      },
      error: (err) => console.error(err),
    });
  }
}
