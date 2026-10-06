export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  subtitulo?: string;
  descricao: string[]; // um item por parágrafo
  isbn?: string;
  dataPublicacao?: Date;
  paginas?: number;
  capaUrl: string;
  idioma?: string;
  status?: string;
}