import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Livro } from '../../../core/models/livro';

@Component({
  selector: 'app-card-livro',
  imports: [RouterLink],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.css',
})
export class CardLivro {
  livro = input.required<Livro>();
  ativo = input<boolean>(false);

  destacar = output<Livro>();

  indisponivel = computed(() => this.livro().status === 'indisponível');
}