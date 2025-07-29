import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transparency-card',
  imports: [],
  templateUrl: './transparency-card.html',
  styleUrl: './transparency-card.css'
})
export class TransparencyCard {
  @Input () title!: string
  @Input () description: string = ""
  @Input () linksCard!: LinkCard[]

}

class LinkCard {
  constructor(linkName: string, linkHref: string){
    this.linkHref = linkHref
    this.linkName = linkName
  }
  linkName: string
  linkHref: string
}