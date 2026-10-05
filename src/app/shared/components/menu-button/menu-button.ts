import { Component, output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  imports: [],
  templateUrl: './menu-button.html',
  styleUrl: './menu-button.css'
})
export class MenuButton {
  menuClicado = output<void>();
}