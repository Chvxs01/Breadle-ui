export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  subtitulo?: string;
  descricao: string;
  isbn?: string;
  dataPublicacao?: Date;
  paginas?: number;
  capaUrl: string;
  idioma?: string;
  status?: string;
}