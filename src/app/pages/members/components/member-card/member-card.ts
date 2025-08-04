import { Component, inject, Input } from '@angular/core';
import { MemberService } from '../../../../services/member-service';

@Component({
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css'
})
export class MemberCard {
  private memberFromBackEnd = inject(MemberService)
  @Input () name!: string
  @Input () description!: string
  @Input () image!: string
}
