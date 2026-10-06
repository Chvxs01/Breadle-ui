import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { ColecaoService } from '../../../core/services/colecao-service';

@Component({
  selector: 'app-detalhes-colecao',
  imports: [RouterLink],
  templateUrl: './detalhes-colecao.html',
  styleUrl: './detalhes-colecao.css',
})
export class DetalhesColecao {

  private route = inject(ActivatedRoute);
  private colecaoService = inject(ColecaoService);

  private id = toSignal(
    this.route.paramMap.pipe(map(params => Number(params.get('id')))),
    { requireSync: true }
  );

  colecao = computed(() => this.colecaoService.buscarPorId(this.id()));

}