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
    },
    {
      id: 9,
      nome: 'Coleção Percy Jackson',
      autor: 'Rick Riordan',
      descricao: 'Um garoto descobre ser filho de um deus grego e vive aventuras ao lado de outros semideuses, enfrentando monstros e deuses do Olimpo no mundo moderno.',
      categoria: 'Fantasia'
    },
    {
      id: 10,
      nome: 'Coleção Crepúsculo',
      autor: 'Stephenie Meyer',
      descricao: 'O amor entre uma adolescente comum e um rapaz misterioso em uma cidade chuvosa do noroeste dos Estados Unidos, cercado de segredos sobrenaturais.',
      categoria: 'Romance'
    },
    {
      id: 11,
      nome: 'Coleção Anna e o Beijo Francês',
      autor: 'Stephanie Perkins',
      descricao: 'Três romances independentes que se passam entre Paris, São Francisco e Nova York, com personagens que se cruzam ao longo da série.',
      categoria: 'Romance'
    },
    {
      id: 12,
      nome: 'Coleção Como Eu Era Antes de Você',
      autor: 'Jojo Moyes',
      descricao: 'A história de Louisa Clark, uma jovem comum cuja vida muda depois de um emprego inesperado, e as escolhas que a levam a recomeçar.',
      categoria: 'Romance'
    },
    {
      id: 13,
      nome: 'Coleção Divergente',
      autor: 'Veronica Roth',
      descricao: 'Em uma Chicago do futuro dividida em facções, uma jovem descobre que não se encaixa em nenhuma e se torna uma ameaça para o sistema.',
      categoria: 'Ficção Científica'
    },
    {
      id: 14,
      nome: 'Coleção Maze Runner',
      autor: 'James Dashner',
      descricao: 'Jovens sem memória presos em um labirinto mortal precisam descobrir quem os colocou lá e como escapar.',
      categoria: 'Ficção Científica'
    },
    {
      id: 15,
      nome: 'Coleção Duna',
      autor: 'Frank Herbert',
      descricao: 'Uma saga épica sobre poder, religião e ecologia no planeta desértico de Arrakis, fonte da substância mais valiosa do universo.',
      categoria: 'Ficção Científica'
    },
    {
      id: 16,
      nome: 'Coleção Fundação',
      autor: 'Isaac Asimov',
      descricao: 'Com o fim do Império Galáctico previsto, um matemático cria um plano para encurtar a era de trevas que virá.',
      categoria: 'Ficção Científica'
    },
    {
      id: 17,
      nome: 'Coleção Hercule Poirot',
      autor: 'Agatha Christie',
      descricao: 'Casos clássicos do detetive belga Hercule Poirot, que resolve crimes com raciocínio e atenção aos detalhes.',
      categoria: 'Suspense'
    },
    {
      id: 18,
      nome: 'Coleção Robert Langdon',
      autor: 'Dan Brown',
      descricao: 'Thrillers em que um professor de simbologia decifra enigmas históricos e artísticos enquanto é perseguido em corridas contra o tempo.',
      categoria: 'Suspense'
    },
    {
      id: 19,
      nome: 'Coleção Arsène Lupin',
      autor: 'Maurice Leblanc',
      descricao: 'As aventuras do elegante ladrão francês Arsène Lupin, mestre dos disfarces que desafia a polícia e até o maior detetive da época.',
      categoria: 'Suspense'
    },
    {
      id: 20,
      nome: 'Coleção Millennium',
      autor: 'Stieg Larsson',
      descricao: 'Um jornalista e uma hacker brilhante investigam crimes e conspirações na Suécia em uma trilogia de suspense policial.',
      categoria: 'Suspense'
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