import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ColecaoResumo } from '../../../core/models/colecao';

@Component({
  selector: 'app-card-colecao',
  imports: [RouterLink],
  templateUrl: './card-colecao.html',
  styleUrl: './card-colecao.css',
})
export class CardColecao {
  colecao = input.required<ColecaoResumo>();
}