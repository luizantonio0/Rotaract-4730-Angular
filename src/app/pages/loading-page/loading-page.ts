import { Component, Input, OnInit, signal } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// Test
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-loading-page',
  imports: [ProgressBarModule, ToastModule],
  templateUrl: './loading-page.html',
  styleUrl: './loading-page.css'
})
export class LoadingPage implements OnInit {
@Input() width: string = "100dvw"

loadingBar = signal<number>(0)
  async ngOnInit(): Promise<void> {
      for (let index = 0; index < 100; index++) {
        const newValue = await this.loading(this.loadingBar());
        this.loadingBar.set(newValue);
      }
  }
  loading(num: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num + 1);
      }, 2000);
    });
  }
}
