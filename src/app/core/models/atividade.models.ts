export type TipoAtividade = 'pessoal' | 'turma';
export type StatusAtividade = 'pendente' | 'em_andamento' | 'concluida';

export interface Atividade {
  id: number;
  titulo: string;
  descricao: string;
  tipo: TipoAtividade;
  status: StatusAtividade;
  progresso: number;
  objetivo: number;
  unidade: string;
  prazo?: string;
  turmaNome?: string;
}
