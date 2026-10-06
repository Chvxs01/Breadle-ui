import { Injectable, inject } from '@angular/core';

import { Colecao, ColecaoDetalhada, ColecaoResumo, GrupoColecoes } from '../models/colecao';
import { LivroService } from './livro-service';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private livroService = inject(LivroService);

  // Os livros se ligam à coleção pelo campo "colecaoId" (veja livro-service.ts)
  private readonly colecoes: readonly Colecao[] = [
    {
      id: 1,
      nome: 'Coleção Harry Potter',
      autor: 'J.K. Rowling',
      descricao: 'A saga do jovem bruxo que descobre o mundo mágico de Hogwarts e enfrenta o bruxo das trevas Lord Voldemort ao longo de sete livros.',
      categoria: 'Fantasia'
    },
    {
      id: 2,
      nome: 'Coleção Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      descricao: 'A grande jornada pela Terra-média para destruir o Um Anel e impedir que o Senhor do Escuro domine o mundo.',
      categoria: 'Fantasia'
    },
    {
      id: 3,
      nome: 'Coleção Para Todos os Garotos',
      autor: 'Jenny Han',
      descricao: 'A história de Lara Jean, uma garota que escreve cartas para seus antigos amores e vê sua vida mudar quando elas são enviadas.',
      categoria: 'Romance'
    }
  ];

  listar(): readonly Colecao[] {
    return this.colecoes;
  }

  buscarPorId(id: number): ColecaoDetalhada | undefined {
    const colecao = this.colecoes.find(c => c.id === id);

    if (!colecao) {
      return undefined;
    }

    return { ...colecao, livros: this.livroService.listarPorColecao(id) };
  }

  // Agrupa as coleções por categoria ("Coleções de Fantasia", "Coleções de Romance"...)
  listarPorCategoria(): GrupoColecoes[] {
    const grupos = new Map<Colecao['categoria'], ColecaoResumo[]>();

    for (const colecao of this.colecoes) {
      const livros = this.livroService.listarPorColecao(colecao.id);

      const resumo: ColecaoResumo = {
        ...colecao,
        capas: livros.slice(0, 3).map(livro => livro.capaUrl),
        totalLivros: livros.length
      };

      const lista = grupos.get(colecao.categoria) ?? [];
      lista.push(resumo);
      grupos.set(colecao.categoria, lista);
    }

    return Array.from(grupos, ([categoria, colecoes]) => ({ categoria, colecoes }));
  }

}