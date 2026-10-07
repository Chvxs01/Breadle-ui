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
    },
        {
      id: 14,
      titulo: 'Mistborn: O Império Final',
      autor: 'Brandon Sanderson',
      subtitulo: '',
      descricao: 'Em um mundo coberto de cinzas e dominado há mil anos por um Lorde Soberano imortal, a jovem ladra Vin descobre ser uma Névoa e se une a uma gangue que planeja derrubar o império.',
      dataPublicacao: new Date(2006, 6, 17),
      capaUrl: 'livros/mist1.jpg',
      idioma: 'Português',
      colecaoId: 4,
      status: 'disponível'
    },
    {
      id: 15,
      titulo: 'Mistborn: O Poço da Ascensão',
      autor: 'Brandon Sanderson',
      subtitulo: '',
      descricao: 'Com o Império Final derrubado, Vin e Elend tentam manter a cidade de Luthadel unida enquanto exércitos rivais cercam seus muros e novos mistérios sobre o passado do mundo vêm à tona.',
      dataPublicacao: new Date(2007, 7, 21),
      capaUrl: 'livros/mist2.jpg',
      idioma: 'Português',
      colecaoId: 4,
      status: 'disponível'
    },
    {
      id: 16,
      titulo: 'Mistborn: O Herói das Eras',
      autor: 'Brandon Sanderson',
      subtitulo: '',
      descricao: 'A névoa fica cada vez mais mortal e o mundo se desfaz. Vin e Elend precisam desvendar o segredo da Ascensão para salvar o que resta da humanidade.',
      dataPublicacao: new Date(2008, 9, 14),
      capaUrl: 'livros/mist3.jpg',
      idioma: 'Português',
      colecaoId: 4,
      status: 'disponível'
    },
    {
      id: 17,
      titulo: 'Jogos Vorazes',
      autor: 'Suzanne Collins',
      subtitulo: '',
      descricao: 'Em uma nação futurista que obriga jovens a lutarem até a morte em um programa de TV, Katniss Everdeen se oferece no lugar da irmã e precisa sobreviver à arena.',
      dataPublicacao: new Date(2008, 8, 14),
      capaUrl: 'livros/jv1.jpg',
      idioma: 'Português',
      colecaoId: 5,
      status: 'disponível'
    },
    {
      id: 18,
      titulo: 'Em Chamas',
      autor: 'Suzanne Collins',
      subtitulo: '',
      descricao: 'Após a vitória nos Jogos, Katniss se torna símbolo de esperança para os distritos e passa a ser alvo da Capital, que prepara uma edição ainda mais cruel do torneio.',
      dataPublicacao: new Date(2009, 8, 1),
      capaUrl: 'livros/jv2.jpg',
      idioma: 'Português',
      colecaoId: 5,
      status: 'disponível'
    },
    {
      id: 19,
      titulo: 'A Esperança',
      autor: 'Suzanne Collins',
      subtitulo: '',
      descricao: 'A rebelião contra a Capital chega ao auge, e Katniss precisa decidir até onde irá pelo destino dos distritos e das pessoas que ama.',
      dataPublicacao: new Date(2010, 7, 24),
      capaUrl: 'livros/jv3.jpg',
      idioma: 'Português',
      colecaoId: 5,
      status: 'disponível'
    },
    {
      id: 20,
      titulo: 'A Seleção',
      autor: 'Kiera Cass',
      subtitulo: '',
      descricao: 'Para escapar da vida em uma sociedade de castas, America Singer entra na Seleção, competição que escolherá a futura esposa do príncipe Maxon, mesmo com o coração preso a outro garoto.',
      dataPublicacao: new Date(2012, 3, 24),
      capaUrl: 'livros/sel1.jpg',
      idioma: 'Português',
      colecaoId: 6,
      status: 'disponível'
    },
    {
      id: 21,
      titulo: 'A Elite',
      autor: 'Kiera Cass',
      subtitulo: '',
      descricao: 'Com a disputa reduzida a poucas candidatas, America precisa decidir entre o príncipe e seu passado enquanto os ataques rebeldes ao palácio ficam mais perigosos.',
      dataPublicacao: new Date(2013, 3, 23),
      capaUrl: 'livros/sel2.jpg',
      idioma: 'Português',
      colecaoId: 6,
      status: 'disponível'
    },
    {
      id: 22,
      titulo: 'A Escolha',
      autor: 'Kiera Cass',
      subtitulo: '',
      descricao: 'Na etapa final, o amor, a lealdade e o futuro do reino entram em jogo, e America precisa fazer a escolha que definirá sua vida.',
      dataPublicacao: new Date(2014, 4, 6),
      capaUrl: 'livros/sel3.jpg',
      idioma: 'Português',
      colecaoId: 6,
      status: 'disponível'
    },
    {
      id: 23,
      titulo: 'Sherlock Holmes: Um Estudo em Vermelho',
      autor: 'Arthur Conan Doyle',
      subtitulo: '',
      descricao: 'Primeira aparição de Sherlock Holmes: ao dividir um apartamento com o doutor Watson, o detetive investiga um misterioso assassinato em Londres.',
      dataPublicacao: new Date(1887, 10, 1),
      capaUrl: 'livros/s1.jpg',
      idioma: 'Português',
      colecaoId: 7,
      status: 'disponível'
    },
    {
      id: 24,
      titulo: 'Sherlock Holmes: O Signo dos Quatro',
      autor: 'Arthur Conan Doyle',
      subtitulo: '',
      descricao: 'Uma jovem recebe pérolas misteriosas e procura Holmes. A investigação revela um antigo tesouro e um crime ligado a segredos vindos da Índia.',
      dataPublicacao: new Date(1890, 1, 1),
      capaUrl: 'livros/s2.jpg',
      idioma: 'Português',
      colecaoId: 7,
      status: 'disponível'
    },
    {
      id: 25,
      titulo: 'Sherlock Holmes: O Cão dos Baskervilles',
      autor: 'Arthur Conan Doyle',
      subtitulo: '',
      descricao: 'Holmes e Watson investigam a lenda de um cão espectral que assombra a família Baskerville nos pântanos de Dartmoor.',
      dataPublicacao: new Date(1902, 2, 1),
      capaUrl: 'livros/s3.jpg',
      idioma: 'Português',
      colecaoId: 7,
      status: 'disponível'
    },
    {
      id: 26,
      titulo: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
      autor: 'C.S. Lewis',
      subtitulo: '',
      descricao: 'Quatro irmãos atravessam um guarda-roupa e chegam a Nárnia, reino enfeitiçado por um inverno sem fim, onde o leão Aslam é a esperança de libertação.',
      dataPublicacao: new Date(1950, 9, 16),
      capaUrl: 'livros/narnia1.jpg',
      idioma: 'Português',
      colecaoId: 8,
      status: 'disponível'
    },
    {
      id: 27,
      titulo: 'As Crônicas de Nárnia: Príncipe Caspian',
      autor: 'C.S. Lewis',
      subtitulo: '',
      descricao: 'Os irmãos Pevensie voltam a uma Nárnia muito mudada para ajudar o jovem príncipe Caspian a recuperar o trono e devolver o reino às criaturas antigas.',
      dataPublicacao: new Date(1951, 9, 15),
      capaUrl: 'livros/narnia2.jpg',
      idioma: 'Português',
      colecaoId: 8,
      status: 'disponível'
    },
    {
      id: 28,
      titulo: 'As Crônicas de Nárnia: O Cavalo e Seu Menino',
      autor: 'C.S. Lewis',
      subtitulo: '',
      descricao: 'Edmundo, Lúcia e o primo Eustáquio embarcam com Caspian em uma viagem pelo mar rumo ao fim do mundo, em busca de sete lordes desaparecidos.',
      dataPublicacao: new Date(1952, 8, 15),
      capaUrl: 'livros/narnia3.jpg',
      idioma: 'Português',
      colecaoId: 8,
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