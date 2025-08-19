import { Component, signal } from '@angular/core';
import { ComponentService } from '../../services/component-service';
import { ProjectData } from '../../models/ProjectData';
import { Footer } from "../index/components/footer/footer";
import { GalleriaModule } from 'primeng/galleria';
import { LoadingPage } from '../loading-page/loading-page';
@Component({
  selector: 'app-projects',
  imports: [Footer, GalleriaModule, LoadingPage],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = signal<ProjectData[]>([])
  hideLoadingBar = signal<boolean> (false)
  
    constructor(private service: ComponentService){}
    ngOnInit(): void {
        this.service.getAll<ProjectData>("project").subscribe({
          next: (res) => {
            this.projects.set(Array.isArray(res) ? res : [res])
            this.hideLoadingBar.set(true)
          },
          error: (err) => console.log(err)
        })
    }
}
