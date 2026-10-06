import { Component, inject } from '@angular/core';
import { Container } from '../../../shared/components/container/container';
import { CardLivro } from '../card-livro/card-livro';
import { LivroService } from '../../../core/services/livro-service';

@Component({
  selector: 'app-livros',
  imports: [Container, CardLivro],
  templateUrl: './livros.html',
  styleUrl: './livros.css',
})
export class Livros {
  livros = inject(LivroService).listar();
}