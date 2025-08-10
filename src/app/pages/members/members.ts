import { Component, Input, OnInit } from '@angular/core';
import { MemberCard } from "./components/member-card/member-card";
import { MemberData } from '../../models/MemberData';
import { ComponentService } from '../../services/component-service';
import { Footer } from "../index/components/footer/footer";

@Component({
  selector: 'app-members',
  imports: [MemberCard, Footer],
  templateUrl: './members.html', 
  styleUrl: './members.css'
})
export class Members implements OnInit {
  members: MemberData[] = []

  constructor(private service: ComponentService){}
  ngOnInit(): void {
      this.service.getAll<MemberData>("member").subscribe({
        next: (res) => {
          this.members = Array.isArray(res) ? res : [res]
          console.log(this.members)
        },
        error: (err) => console.log(err)
      })
  }
}
