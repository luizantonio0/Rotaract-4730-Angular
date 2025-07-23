import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-links',
  imports: [],
  templateUrl: './card-links.html',
  styleUrl: './card-links.css'
})
export class CardLinks {
  @Input () name: string = ""
  @Input () image: string = ""  
}
