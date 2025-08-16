import { Component, signal } from '@angular/core';
import { ProjectCard } from "./components/project-card/project-card";
import { ComponentService } from '../../services/component-service';
import { ProjectData } from '../../models/ProjectData';
import { Footer } from "../index/components/footer/footer";
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-projects',
  imports: [ProjectCard, Footer, GalleriaModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = signal<ProjectData[]>([])
  
    constructor(private service: ComponentService){}
    ngOnInit(): void {
        this.service.getAll<ProjectData>("project").subscribe({
          next: (res) => {
            this.projects.set(Array.isArray(res) ? res : [res])
            console.log(this.projects())
          },
          error: (err) => console.log(err)
        })
    }
}
