import { Component, HOST_TAG_NAME } from '@angular/core';
import { Routes } from '@angular/router';
import { Detalhes } from './pages/livro/detalhes/detalhes';
import { Turmas } from './pages/turmas/turmas';
import { CardLivro } from './pages/livro/card-livro/card-livro';

export const routes: Routes = [
  { path: 'livro/detalhes/:id', component: Detalhes },
  { path: '', redirectTo: 'card-livro', pathMatch: 'full' },
  { path: 'turmas', component: Turmas },
  { path: 'card-livro', component: CardLivro },
];
