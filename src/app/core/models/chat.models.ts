export interface UsuarioChat {
  id: number;
  nome: string;
  cor: string; 
  online: boolean;
}

export interface CanalChat {
  id: number;
  nome: string;
  descricao: string;
}

export interface TurmaChat {
  id: number;
  nome: string;
  sigla: string; 
  canais: CanalChat[];
  membrosIds: number[];
}

export interface MensagemChat {
  id: number;
  canalId: number;
  autorId: number;
  texto: string;
  enviadaEm: Date;
}