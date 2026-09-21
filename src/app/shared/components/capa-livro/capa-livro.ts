import { Component, input } from '@angular/core';

@Component({
  selector: 'app-capa-livro',
  imports: [],
  templateUrl: './capa-livro.html',
  styleUrl: './capa-livro.css',
})
export class CapaLivro {
  src = input<string>('');
  titulo = input<string>('');
}