import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Container } from '../../../shared/components/container/container';
import { CapaLivro } from '../../../shared/components/capa-livro/capa-livro';
import { LivroService } from '../../../core/services/livro-service';

@Component({
  selector: 'app-detalhes',
  imports: [Container, CapaLivro, RouterLink],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {

  private route = inject(ActivatedRoute);
  private livroService = inject(LivroService);

  private id = toSignal(
    this.route.paramMap.pipe(map(params => Number(params.get('id')))),
    { requireSync: true }
  );

  livro = computed(() => this.livroService.buscarPorId(this.id()));

}