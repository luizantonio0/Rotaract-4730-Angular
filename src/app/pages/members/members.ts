import { Component, Input, OnInit } from '@angular/core';
import { MemberCard } from "./components/member-card/member-card";
import { MemberService } from '../../services/member-service';
import { MemberData } from '../../models/MemberData';

@Component({
  selector: 'app-members',
  imports: [MemberCard],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members implements OnInit {
  members: MemberData[] = []
  constructor(private service: MemberService){}
  ngOnInit(): void {
      this.service.getAll("member").subscribe({
        next: (res) => {
          this.members = Array.isArray(res) ? res : [res]
          console.log(res)
        },
        error: (err) => console.log(err)
      })
  }
}
