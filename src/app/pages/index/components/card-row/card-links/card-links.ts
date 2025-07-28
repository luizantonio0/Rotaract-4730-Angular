import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-links',
  imports: [RouterLink],
  templateUrl: './card-links.html',
  styleUrl: './card-links.css'
})
export class CardLinks {
  @Input () name: string = ""
  @Input () image: string = ""  
  @Input () link: string = ""
}
