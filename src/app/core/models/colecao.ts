import { Livro } from './livro';

export type CategoriaColecao = 'Fantasia' | 'Romance' | 'Ficção Científica' | 'Suspense';

export interface Colecao {
  id: number;
  nome: string;
  autor: string;
  descricao: string;
  categoria: CategoriaColecao;
}

// Coleção + as capas dos livros que formam a "montagem" do card
export interface ColecaoResumo extends Colecao {
  capas: string[];
  totalLivros: number;
}

export interface GrupoColecoes {
  categoria: CategoriaColecao;
  colecoes: ColecaoResumo[];
}

export interface ColecaoDetalhada extends Colecao {
  livros: readonly Livro[];
}
