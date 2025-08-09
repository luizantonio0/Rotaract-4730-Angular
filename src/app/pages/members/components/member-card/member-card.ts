import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css'
})
export class MemberCard {
  @Input () name!: string
  @Input () description!: string
  @Input () image!: string
}
