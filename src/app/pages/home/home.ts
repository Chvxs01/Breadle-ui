import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/components/container/container';
import { LivroService } from '../../core/services/livro-service';

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

  private livroService = inject(LivroService);

  // Livro em andamento (o progresso virá do backend no futuro)
  livroAtual = this.livroService.buscarPorId(1);
  paginaAtual = 57;

  progresso = computed(() => {
    const total = this.livroAtual?.paginas ?? 0;
    return total > 0 ? Math.round((this.paginaAtual / total) * 100) : 0;
  });

  atalhos: Atalho[] = [
    { titulo: 'Livros', descricao: 'Explore o catálogo', icone: 'bi-book', rota: '/livros' },
    { titulo: 'Turmas', descricao: 'Acompanhe suas turmas', icone: 'bi-people-fill', rota: '/turmas' },
    { titulo: 'Metas', descricao: 'Veja seu progresso de leitura', icone: 'bi-bullseye', rota: '/metas' },
  ];

}