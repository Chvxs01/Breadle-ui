import { Routes } from '@angular/router';
import { Detalhes } from './pages/livro/detalhes/detalhes';
import { Turmas } from './pages/turmas/turmas';
import { CardLivro } from './pages/livro/card-livro/card-livro';
import { Metas } from './pages/metas/metas';

export const routes: Routes = [
  { path: '', redirectTo: 'livro/detalhes', pathMatch: 'full' },
  { path: 'livros', component: CardLivro },
  { path: 'livro/detalhes', component: Detalhes },
  { path: 'turmas', component: Turmas },
  { path: 'metas', component: Metas },
  { path: '**', redirectTo: 'livro/detalhes' },
];