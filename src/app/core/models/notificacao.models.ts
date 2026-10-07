export type TipoNotificacao =
  | 'meta'
  | 'chat'
  | 'turma'
  | 'atividade'
  | 'sistema';

export interface Notificacao {
  id: number;
  tipo: TipoNotificacao;
  titulo: string;
  mensagem: string;
  lida: boolean;
  criadaEm: Date;
}