import { Injectable } from '@angular/core';

import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly livros: readonly Livro[] = [
    {
      id: 1,
      titulo: 'Harry Potter e a Pedra Filosofal',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Harry Potter e a Pedra Filosofal acompanha um garoto órfão que descobre ser um bruxo aos 11 anos.',
      dataPublicacao: new Date(1997, 5, 26),
      paginas: 264,
      capaUrl: 'livros/harry-potterPF.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 2,
      titulo: 'Harry Potter e a Câmara Secreta',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Em seu segundo ano em Hogwarts, Harry precisa encontrar e fechar a lendária Câmara Secreta após um monstro começar a petrificar alunos.',
      dataPublicacao: new Date(1998, 6, 2),
      capaUrl: 'livros/harry-potterCS.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 3,
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Harry descobre segredos do passado de seus pais enquanto a escola é cercada por Dementadores devido à fuga do prisioneiro Sirius Black.',
      dataPublicacao: new Date(1999, 6, 8),
      capaUrl: 'livros/harry-potterPA.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 4,
      titulo: 'Harry Potter e o Cálice de Fogo',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Selecionado misteriosamente para o perigoso Torneio Tribruxo, Harry enfrenta tarefas mortais em um plano para trazer Voldemort de volta.',
      dataPublicacao: new Date(2000, 6, 8),
      capaUrl: 'livros/harry-potterCF.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 5,
      titulo: 'Harry Potter e a Ordem da Fênix',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Com o Ministério da Magia negando o retorno de Voldemort, Harry lidera secretamente um grupo de alunos para se defenderem das trevas.',
      dataPublicacao: new Date(2003, 5, 21),
      capaUrl: 'livros/harry-potterOF.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 6,
      titulo: 'Harry Potter e o Enigma do Príncipe',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Harry encontra um antigo livro misterioso e tem lições com Dumbledore para descobrir as origens de Voldemort e o segredo das Horcruxes.',
      dataPublicacao: new Date(2005, 6, 16),
      capaUrl: 'livros/harry-potterEP.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 7,
      titulo: 'Harry Potter e as Relíquias da Morte',
      autor: 'J.K. Rowling',
      subtitulo: '',
      descricao: 'Harry, Rony e Hermione abandonam a escola para caçar as Horcruxes restantes, culminando na batalha final contra Voldemort.',
      dataPublicacao: new Date(2007, 6, 21),
      capaUrl: 'livros/harry-potterRM.jpg',
      idioma: 'Português',
      colecaoId: 1,
      status: 'disponível'
    },
    {
      id: 8,
      titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
      autor: 'J.R.R. Tolkien',
      subtitulo: '',
      descricao: 'Frodo Bolseiro herda um anel misterioso e descobre que ele é a arma do Senhor do Escuro. Ao lado de uma Sociedade de nove companheiros, começa a jornada rumo à Montanha da Perdição para destruí-lo.',
      dataPublicacao: new Date(1954, 6, 29),
      capaUrl: 'livros/SociedadeDoAnel.jpg',
      idioma: 'Português',
      colecaoId: 2,
      status: 'disponível'
    },
    {
      id: 9,
      titulo: 'O Senhor dos Anéis: As Duas Torres',
      autor: 'J.R.R. Tolkien',
      subtitulo: '',
      descricao: 'A Sociedade se desfaz: Frodo e Sam seguem para Mordor guiados por Gollum, enquanto Aragorn, Legolas e Gimli lutam para defender Rohan da ameaça de Saruman.',
      dataPublicacao: new Date(1954, 10, 11),
      capaUrl: 'livros/AsDuasTorres.jpg',
      idioma: 'Português',
      colecaoId: 2,
      status: 'disponível'
    },
    {
      id: 10,
      titulo: 'O Senhor dos Anéis: O Retorno do Rei',
      autor: 'J.R.R. Tolkien',
      subtitulo: '',
      descricao: 'Com os exércitos de Sauron reunidos, Gondor enfrenta a batalha decisiva enquanto Frodo e Sam tentam alcançar a Montanha da Perdição. O destino da Terra-média está em jogo.',
      dataPublicacao: new Date(1955, 9, 20),
      capaUrl: 'livros/oRetornoDoRei.jpg',
      idioma: 'Português',
      colecaoId: 2,
      status: 'disponível'
    },
    {
      id: 11,
      titulo: 'Para Todos os Garotos Que Já Amei',
      autor: 'Jenny Han',
      subtitulo: '',
      descricao: 'Lara Jean guarda suas cartas de amor secretas em uma caixa de chapéu, até que elas são enviadas misteriosamente aos garotos por quem já se apaixonou e sua vida vira de cabeça para baixo.',
      dataPublicacao: new Date(2014, 3, 15),
      capaUrl: 'livros/PTGA.jpg',
      idioma: 'Português',
      colecaoId: 3,
      status: 'disponível'
    },
    {
      id: 12,
      titulo: 'P.S. Ainda Amo Você',
      autor: 'Jenny Han',
      subtitulo: '',
      descricao: 'Lara Jean e Peter tentam transformar um namoro de mentira em algo real, mas a volta de um antigo destinatário de suas cartas a deixa dividida.',
      dataPublicacao: new Date(2015, 4, 26),
      capaUrl: 'livros/AAC.jpg',
      idioma: 'Português',
      colecaoId: 3,
      status: 'disponível'
    },
    {
      id: 13,
      titulo: 'Sempre e Para Sempre, Lara Jean',
      autor: 'Jenny Han',
      subtitulo: '',
      descricao: 'No último ano do ensino médio, Lara Jean precisa lidar com a escolha da faculdade, o casamento do pai e o futuro do namoro com Peter, enquanto se despede de uma fase da vida.',
      dataPublicacao: new Date(2017, 4, 2),
      capaUrl: 'livros/Sempre.jpg',
      idioma: 'Português',
      colecaoId: 3,
      status: 'disponível'
    }
  ];

  buscarPorId(id: number): Livro | undefined {
    return this.livros.find(livro => livro.id === id);
  }

  listar(): readonly Livro[] {
    return this.livros;
  }

  listarPorColecao(colecaoId: number): readonly Livro[] {
    return this.livros.filter(livro => livro.colecaoId === colecaoId);
  }

}