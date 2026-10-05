import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/components/header/header';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Sidebar,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update(aberto => !aberto);
  }

}