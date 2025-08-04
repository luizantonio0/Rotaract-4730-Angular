import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input () title!: string
  @Input () content!: string
  @Input () image: string = "./foto-grupo-rotaract.png"

}
