import { Component, OnInit, signal } from '@angular/core';
import { MemberData } from '../../models/MemberData';
import { ComponentService } from '../../services/component-service';
import { Footer } from "../index/components/footer/footer";
import { PMemberCard } from "./components/p-member-card/p-member-card";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-members',
  imports: [Footer, PMemberCard, CarouselModule, ButtonModule],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members implements OnInit {

responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  members = signal<MemberData[]>([])

  constructor(private service: ComponentService){}
  ngOnInit(): void {
      this.service.getAll<MemberData>("member").subscribe({
        next: (res) => {
          this.members.set(Array.isArray(res) ? res : [res])
        },
        error: (err) => console.log(err)
      })
  }
}
