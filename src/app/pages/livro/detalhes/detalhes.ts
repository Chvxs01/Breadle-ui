import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerComponent } from '../../../shared/components/container/container';
import { CapaLivro } from '../../../shared/components/capa-livro/capa-livro';
import { Livro } from '../../../core/models/livro';
import { LivroService } from '../../../core/services/livro-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  imports: [ContainerComponent, CapaLivro, DatePipe],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {

  private route = inject(ActivatedRoute);
  private livroService = inject(LivroService);

  livro?: Livro;

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.livro = this.livroService.buscarPorId(id);

  }

}