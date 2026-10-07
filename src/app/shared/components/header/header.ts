import { Component, output, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LivroService } from '../../../core/services/livro-service';
import { Livro } from '../../../core/models/livro';
import { contem, destacar, Trecho } from '../../../core/utils/busca';
import { AuthService } from '../../../core/services/auth-service';

interface ResultadoBusca {
  livro: Livro;
  titulo: Trecho[];
  autor: Trecho[] | null;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  menuClicado = output<void>();

  private livros = inject(LivroService).listar();
  auth = inject(AuthService);
  private router = inject(Router);

  termo = signal('');
  livroEmFoco = signal<number | null>(null);
  perfilAberto = signal(false);

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
    this.router.events
      .pipe(
        filter(evento => evento instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this.limparBusca();
        this.perfilAberto.set(false);
      });
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
    this.perfilAberto.set(false);
    this.menuClicado.emit();
  }

  abrirPerfil(): void {
    if (!this.auth.logado()) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.perfilAberto.update(aberto => !aberto);
    this.limparBusca();
  }

  fecharPerfil(): void {
    this.perfilAberto.set(false);
  }

  sair(): void {
    this.auth.sair();
    this.perfilAberto.set(false);
    this.router.navigateByUrl('/');
  }
}