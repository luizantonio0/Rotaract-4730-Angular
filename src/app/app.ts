import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./pages/index/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  template: '<router-outlet /> <app-footer></app-footer>',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rotaract';
}
