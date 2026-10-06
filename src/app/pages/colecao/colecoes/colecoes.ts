import { Component, inject } from '@angular/core';

import { CardColecao } from '../card-colecao/card-colecao';
import { ColecaoService } from '../../../core/services/colecao-service';

@Component({
  selector: 'app-colecoes',
  imports: [CardColecao],
  templateUrl: './colecoes.html',
  styleUrl: './colecoes.css',
})
export class Colecoes {

  grupos = inject(ColecaoService).listarPorCategoria();

}