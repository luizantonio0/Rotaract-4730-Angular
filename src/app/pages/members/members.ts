import { Component, Input, OnInit } from '@angular/core';
import { MemberCard } from "./components/member-card/member-card";
import { MemberService } from '../../services/member-service';

@Component({
  selector: 'app-members',
  imports: [MemberCard],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members implements OnInit {
  member: any
  constructor(private service: MemberService){}
  ngOnInit(): void {
      this. member = this.service.getAll("member")
  }
}
