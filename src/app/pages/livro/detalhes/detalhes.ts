import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container';
import { CapaLivro } from '../../../shared/components/capa-livro/capa-livro';
import { Livro } from '../../../core/models/livro';

@Component({
  selector: 'app-detalhes',
  imports: [ContainerComponent, CapaLivro],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {

  livro: Livro = {
    id: 1,
    titulo: 'Harry Potter e a Pedra Filosofal',
    subtitulo: '',
    descricao: 'Harry Potter e a Pedra Filosofal acompanha um garoto órfão que descobre ser um bruxo aos 11 anos.',
    dataPublicacao: new Date(1997, 5, 26),
    capaUrl: 'livros/harry-potter.jpg',
    idioma: 'Português',
    status: 'disponível'
  };

}