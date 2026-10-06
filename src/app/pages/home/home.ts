import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/components/container/container';

interface Atalho {
  titulo: string;
  descricao: string;
  icone: string;
  rota: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, Container],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // Valores provisórios até existir backend
  leituraAtual = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    capaUrl: 'livros/harry-potter.jpeg',
    paginaAtual: 57,
    totalPaginas: 264,
  };

  progresso = computed(() =>
    Math.round((this.leituraAtual.paginaAtual / this.leituraAtual.totalPaginas) * 100)
  );

  atalhos: Atalho[] = [
    {
      titulo: 'Livros',
      descricao: 'Explore o catálogo',
      icone: 'bi-book',
      rota: '/livros',
    },
    {
      titulo: 'Turmas',
      descricao: 'Acompanhe suas turmas',
      icone: 'bi-people-fill',
      rota: '/turmas',
    },
    {
      titulo: 'Metas',
      descricao: 'Veja seu progresso de leitura',
      icone: 'bi-bullseye',
      rota: '/metas',
    },
  ];

}