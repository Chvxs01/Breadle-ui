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
    },
        {
      id: 4,
      nome: 'Coleção Mistborn',
      autor: 'Brandon Sanderson',
      descricao: 'Em um mundo coberto de cinzas e governado por um imortal, uma ladra e sua gangue descobrem o poder da alomancia e tentam derrubar um império de mil anos.',
      categoria: 'Fantasia'
    },
    {
      id: 5,
      nome: 'Coleção Jogos Vorazes',
      autor: 'Suzanne Collins',
      descricao: 'Em uma nação futurista dividida em distritos, jovens são forçados a lutar até a morte em um espetáculo televisionado, e uma sobrevivente se torna o rosto de uma rebelião.',
      categoria: 'Ficção Científica'
    },
    {
      id: 6,
      nome: 'Coleção A Seleção',
      autor: 'Kiera Cass',
      descricao: 'Em um reino dividido em castas, trinta e cinco garotas disputam o coração do príncipe herdeiro em uma competição que pode mudar a vida de todas elas.',
      categoria: 'Romance'
    },
    {
      id: 7,
      nome: 'Coleção Sherlock Holmes',
      autor: 'Arthur Conan Doyle',
      descricao: 'Os primeiros romances do detetive mais famoso da literatura, narrados pelo fiel doutor Watson, com crimes misteriosos resolvidos pela lógica e pela observação.',
      categoria: 'Suspense'
    },
    {
      id: 8,
      nome: 'Coleção As Crônicas de Nárnia',
      autor: 'C.S. Lewis',
      descricao: 'Os primeiros livros da série em que crianças atravessam portais para o reino mágico de Nárnia, onde animais falam e o leão Aslam defende o bem. Reúne os três primeiros títulos em ordem de publicação.',
      categoria: 'Fantasia'
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