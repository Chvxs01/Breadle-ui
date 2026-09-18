export interface Livro {
    id: number;
    titulo?: string;
    subtitulo?: string;
    descricao?: string;
    isbn?: number;
    dataPublicacao?: Date;
    capaUrl?: string;
    idioma?: string;
    status?: string
}
