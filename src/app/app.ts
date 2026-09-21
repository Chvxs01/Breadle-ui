import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { SidebarToggle } from './shared/components/sidebar-toggle/sidebar-toggle';
// import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, SidebarToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Breadle-ui');

   menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update(valor => !valor);
  }
}
