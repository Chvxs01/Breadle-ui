import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardLivro } from '../card-livro/card-livro';
import { LivroService } from '../../../core/services/livro-service';
import { Livro } from '../../../core/models/livro';

@Component({
  selector: 'app-livros',
  imports: [CardLivro, RouterLink],
  templateUrl: './livros.html',
  styleUrl: './livros.css',
})
export class Livros {

  livros = inject(LivroService).listar();

  // Livro exibido na área de destaque (começa pelo primeiro)
  livroAtivo = signal<Livro | undefined>(this.livros[0]);

  private trilho = viewChild.required<ElementRef<HTMLElement>>('trilho');

  definirDestaque(livro: Livro): void {
    this.livroAtivo.set(livro);
  }

  rolar(direcao: 1 | -1): void {
    const trilho = this.trilho().nativeElement;
    trilho.scrollBy({ left: direcao * trilho.clientWidth * 0.8, behavior: 'smooth' });
  }

}