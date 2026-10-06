import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  menuClicado = output<void>();

  private livros = inject(LivroService).listar();

  termo = signal('');

  // Livro sob o mouse na lista (usado para realçar a capa correspondente)
  livroEmFoco = signal<number | null>(null);

  buscaAberta = computed(() => this.termo().trim().length > 0);

  resultados = computed<ResultadoBusca[]>(() => {
    const termo = this.termo().trim();

    if (!termo) {
      return [];
    }

    return this.livros
      .filter(livro => contem(livro.titulo, termo) || contem(livro.autor, termo))
      .map(livro => ({
        livro,
        titulo: destacar(livro.titulo, termo),
        autor: contem(livro.titulo, termo) ? null : destacar(livro.autor, termo),
      }));
  });

  constructor() {
    // Ao navegar para qualquer página (ex.: detalhes do livro), fecha a busca
    inject(Router).events
      .pipe(
        filter(evento => evento instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => this.limparBusca());
  }

  aoDigitar(evento: Event): void {
    this.termo.set((evento.target as HTMLInputElement).value);
  }

  limparBusca(): void {
    this.termo.set('');
    this.livroEmFoco.set(null);
  }

  abrirMenu(): void {
    this.limparBusca();
    this.menuClicado.emit();
  }

}