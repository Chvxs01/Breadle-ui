import { Injectable, computed, signal } from "@angular/core";
import { Notificacao } from "../models/notificacao.models";

@Injectable({ providedIn: 'root' })
export class NotificacoesService {
  private readonly _notificacoes = signal<Notificacao[]>([
    {
      id: 1,
      tipo: 'meta',
      titulo: 'Meta semanal quase lá!',
      mensagem: 'Faltam 2 livros para você alcançar a meta da semana.',
      lida: false,
      criadaEm: new Date(Date.now() - 1000 * 60 * 25),
    },
    {
      id: 2,
      tipo: 'turma',
      titulo: 'Turma acima da média',
      mensagem: 'A turma 3° Ano - Desenvolvimento está acima da média este mês.',
      lida: false,
      criadaEm: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: 3,
      tipo: 'chat',
      titulo: 'Nova mensagem',
      mensagem: 'Ana enviou uma mensagem no chat geral.',
      lida: false,
      criadaEm: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
    {
      id: 4,
      tipo: 'atividade',
      titulo: 'Atividade pendente',
      mensagem: 'Você precisa concluir a leitura de 1 livro até sexta-feira.',
      lida: true,
      criadaEm: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
      id: 5,
      tipo: 'sistema',
      titulo: 'Bem-vindo ao Breadle!',
      mensagem: 'Explore turmas, metas e o chat com seus amigos leitores.',
      lida: true,
      criadaEm: new Date(Date.now() - 1000 * 60 * 60 * 48),
    },
  ]);

  readonly notificacoes = this._notificacoes.asReadonly();

  readonly naoLidas = computed(() =>
    this._notificacoes().filter((n) => !n.lida)
  );

  readonly contadorNaoLidas = computed(() => this.naoLidas().length);

  marcarComoLida(id: number): void {
    this._notificacoes.update((lista) =>
      lista.map((n) => (n.id === id ? { ...n, lida: true } : n))
    );
  }

  marcarTodasComoLidas(): void {
    this._notificacoes.update((lista) =>
      lista.map((n) => ({ ...n, lida: true }))
    );
  }

  adicionar(notificacao: Omit<Notificacao, 'id' | 'criadaEm' | 'lida'>): void {
    const nova: Notificacao = {
      ...notificacao,
      id: Date.now(),
      lida: false,
      criadaEm: new Date(),
    };
    this._notificacoes.update((lista) => [nova, ...lista]);
  }
}