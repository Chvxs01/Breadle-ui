import { Component, inject } from '@angular/core';
import { Notificacao, TipoNotificacao } from '../../core/models/notificacao.models';
import { NotificacoesService } from '../../core/services/notificacao.service';

@Component({
  selector: 'app-notificacoes',
  imports: [],
  templateUrl: './notificacoes.html',
  styleUrl: './notificacoes.css',
})

export class Notificacoes {
  private readonly servico = inject(NotificacoesService);

  notificacoes = this.servico.notificacoes;
  contadorNaoLidas = this.servico.contadorNaoLidas;

  marcarComoLida(id: number): void {
    this.servico.marcarComoLida(id);
  }

  marcarTodasComoLidas(): void {
    this.servico.marcarTodasComoLidas();
  }

  iconePorTipo(tipo: TipoNotificacao): string {
    switch (tipo) {
      case 'meta':
        return 'bi-bullseye';
      case 'chat':
        return 'bi-chat-left-text';
      case 'turma':
        return 'bi-people-fill';
      case 'atividade':
        return 'bi-clipboard';
      default:
        return 'bi-bell';
    }
  }

  tempoRelativo(data: Date): string {
    const diffMs = Date.now() - data.getTime();
    const min = Math.floor(diffMs / 60000);
    if (min < 1) return 'Agora';
    if (min < 60) return `${min} min atrás`;
    const horas = Math.floor(min / 60);
    if (horas < 24) return `${horas}h atrás`;
    const dias = Math.floor(horas / 24);
    if (dias === 1) return 'Ontem';
    return `${dias} dias atrás`;
  }

  trackById(_: number, item: Notificacao): number {
    return item.id;
  }
}
