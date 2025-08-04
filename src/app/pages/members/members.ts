import { Component, Input } from '@angular/core';
import { MemberCard } from "./components/member-card/member-card";

@Component({
  selector: 'app-members',
  imports: [MemberCard],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members {

}
