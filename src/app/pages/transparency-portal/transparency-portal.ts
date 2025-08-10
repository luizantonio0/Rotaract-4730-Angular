import { Component, OnInit } from '@angular/core';
import { TransparencyCard } from "./components/transparency-card/transparency-card";
import { TransparencyData } from '../../models/TransparencyData';
import { ComponentService } from '../../services/component-service';
@Component({
  selector: 'app-transparency-portal',
  imports: [TransparencyCard],
  templateUrl: './transparency-portal.html',
  styleUrl: './transparency-portal.css'
})
export class TransparencyPortal implements OnInit {
  transparencyCard: TransparencyData[]

  constructor(private service: ComponentService){
    this.service.getAll<TransparencyData>("transparency").subscribe({
      next:(res) => {
        this.transparencyCard = Array.isArray(res)? res: [res]
        console.log(this.transparencyCard)
        return   
      },
      error: (err) => console.log(err)
    })
    this.transparencyCard = []
  }
  
  ngOnInit(): void {
    
  }
}
