import { Component } from '@angular/core';
import { ProjectCard } from "./components/project-card/project-card";
import { ComponentService } from '../../services/component-service';
import { ProjectData } from '../../models/ProjectData';
import { Footer } from "../index/components/footer/footer";
@Component({
  selector: 'app-projects',
  imports: [ProjectCard, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: ProjectData[] = []
  
    constructor(private service: ComponentService){}
    ngOnInit(): void {
        this.service.getAll<ProjectData>("project").subscribe({
          next: (res) => {
            this.projects = Array.isArray(res) ? res : [res]
            console.log(this.projects)
          },
          error: (err) => console.log(err)
        })
    }
}
