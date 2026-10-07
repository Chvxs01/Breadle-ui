import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { MensagemChat, TurmaChat, UsuarioChat } from "../models/chat.models";

const minutosAtras = (minutos: number): Date => new Date(Date.now() - minutos * 60_000);

const USUARIO_REMOVIDO: UsuarioChat = {
  id: 0,
  nome: 'Usuário removido',
  cor: '#949ba4',
  online: false,
};

/**
 * Serviço do chat com dados MOCKADOS.
 * TODO (integração com o Java): trocar os dados abaixo por chamadas HttpClient
 * (e depois WebSocket para mensagens em tempo real), mantendo as mesmas assinaturas públicas.
 */
@Injectable({ providedIn: 'root' })
export class ChatService {

  readonly usuarioAtual: UsuarioChat = { id: 1, nome: 'Você', cor: '#ffd900', online: true };

  private readonly usuariosState = signal<UsuarioChat[]>([
    this.usuarioAtual,
    { id: 2, nome: 'Maria Souza', cor: '#dcd0ff', online: true },
    { id: 3, nome: 'Arthur Lima', cor: '#8ecae6', online: true },
    { id: 4, nome: 'Julia Alves', cor: '#ffb4a2', online: false },
    { id: 5, nome: 'Pedro Rocha', cor: '#b5e48c', online: false },
    { id: 6, nome: 'Camila Dias', cor: '#f4a261', online: true },
  ]);

  readonly turmas = signal<TurmaChat[]>([
    {
      id: 1,
      nome: '3° Ano - Desenvolvimento',
      sigla: '3D',
      membrosIds: [1, 2, 3, 4, 5],
      canais: [
        { id: 11, nome: 'geral', descricao: 'Conversa livre da turma' },
        { id: 12, nome: 'indicacoes', descricao: 'Indique e peça indicações de livros' },
        { id: 13, nome: 'duvidas', descricao: 'Dúvidas sobre as leituras e atividades' },
      ],
    },
    {
      id: 2,
      nome: '3° Ano - Ciências Humanas',
      sigla: 'CH',
      membrosIds: [1, 2, 6],
      canais: [
        { id: 21, nome: 'geral', descricao: 'Conversa livre da turma' },
        { id: 22, nome: 'debates', descricao: 'Debates sobre os livros do mês' },
      ],
    },
    {
      id: 3,
      nome: 'Clube de leitura',
      sigla: 'CL',
      membrosIds: [1, 3, 4, 6],
      canais: [
        { id: 31, nome: 'geral', descricao: 'Bem-vindo ao clube de leitura' },
        { id: 32, nome: 'metas', descricao: 'Acompanhe as metas do grupo' },
      ],
    },
  ]);

  private readonly mensagensState = signal<MensagemChat[]>([
    { id: 1, canalId: 11, autorId: 2, texto: 'Pessoal, alguém já leu o livro desse mês?', enviadaEm: minutosAtras(60 * 26) },
    { id: 2, canalId: 11, autorId: 3, texto: 'Estou no capítulo 5, mas já estou gostando.', enviadaEm: minutosAtras(60 * 26 - 3) },
    { id: 3, canalId: 11, autorId: 2, texto: 'Que bom! Amanhã eu termino o meu.', enviadaEm: minutosAtras(60 * 26 - 4) },
    { id: 4, canalId: 11, autorId: 4, texto: 'Faltam 2 livros para a nossa meta semanal, vamos lá!', enviadaEm: minutosAtras(42) },
    { id: 5, canalId: 11, autorId: 1, texto: 'Eu fecho o meu até sexta.', enviadaEm: minutosAtras(40) },
    { id: 6, canalId: 11, autorId: 3, texto: 'Boa! Depois me conta o que achou do final.', enviadaEm: minutosAtras(12) },
    { id: 7, canalId: 12, autorId: 5, texto: 'Alguém tem indicação de ficção científica?', enviadaEm: minutosAtras(90) },
    { id: 8, canalId: 21, autorId: 6, texto: 'Bem-vindos à turma de Ciências Humanas!', enviadaEm: minutosAtras(200) },
    { id: 9, canalId: 31, autorId: 6, texto: 'O clube de leitura começou! Qual será o primeiro livro?', enviadaEm: minutosAtras(30) },
  ]);

  readonly mensagens = this.mensagensState.asReadonly();

  buscarUsuario(id: number): UsuarioChat {
    return this.usuariosState().find(u => u.id === id) ?? USUARIO_REMOVIDO;
  }

  mensagensDoCanal(canalId: number): MensagemChat[] {
    return this.mensagensState()
      .filter(m => m.canalId === canalId)
      .sort((a, b) => a.enviadaEm.getTime() - b.enviadaEm.getTime());
  }

  enviarMensagem(canalId: number, texto: string): void {
    const limpo = texto.trim();
    if (!limpo) {
      return;
    }

    const proximoId = this.mensagensState().reduce((maior, m) => Math.max(maior, m.id), 0) + 1;

    this.mensagensState.update(lista => [
      ...lista,
      {
        id: proximoId,
        canalId,
        autorId: this.usuarioAtual.id,
        texto: limpo,
        enviadaEm: new Date(),
      },
    ]);
  }
}
