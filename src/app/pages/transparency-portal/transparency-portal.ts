import { Component, OnInit, signal} from '@angular/core';
import { TransparencyData } from '../../models/TransparencyData';
import { ComponentService } from '../../services/component-service';
import { Footer } from "../index/components/footer/footer";
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-transparency-portal',
  imports: [Footer, AccordionModule],
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
        this.transparencyCard.set(data); 
      },
      error: (err) => console.error(err),
    });
  }
}
