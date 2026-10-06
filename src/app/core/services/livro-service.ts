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
      status: 'disponível'
    }
  ];

  buscarPorId(id: number): Livro | undefined {
    return this.livros.find(livro => livro.id === id);
  }

  listar(): readonly Livro[] {
    return this.livros;
  }

}