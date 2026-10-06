import { Component } from '@angular/core';
import { Container } from '../../../shared/components/container/container';
import { CapaLivro } from '../../../shared/components/capa-livro/capa-livro';
import { Livro } from '../../../core/models/livro';

@Component({
  selector: 'app-detalhes',
  imports: [Container, CapaLivro],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {

  livro: Livro = {
    id: 1,
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    subtitulo: '',
    descricao: [
      'Harry Potter e a Pedra Filosofal acompanha um garoto órfão que descobre ser um bruxo aos 11 anos. Convidado a ingressar na Escola de Magia e Bruxaria de Hogwarts, ele descobre um mundo mágico, faz grandes amigos—Rony e Hermione—e parte em uma missão para proteger um poderoso artefato de Lord Voldemort.',
      'Esse livro marca o início da grande aventura de Harry pelo mundo da feitiçaria, onde acompanhamos ele e seus amigos embarcando em uma aventura atrás da Pedra Filosofal. Ganhador de diversos prêmios de literatura de destaque internacional.',
    ],
    dataPublicacao: new Date(1997, 5, 26),
    paginas: 264,
    capaUrl: 'livros/harry-potter.jpeg',
    idioma: 'Português',
    status: 'disponível'
  };

  // Progresso do usuário (virá do backend no futuro)
  paginaAtual = 57;

}