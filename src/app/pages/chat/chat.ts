import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { afterNextRender } from '@angular/core';
import { computed } from '@angular/core';
import { Inject, inject } from '@angular/core';
import { Signal, signal } from '@angular/core';
import { ViewChild, viewChild } from '@angular/core';
import { CanalChat, MensagemChat, TurmaChat, UsuarioChat } from '../../core/models/chat.models';
import { ChatService } from '../../core/services/chat.service';

interface ItemMensagem {
  mensagem: MensagemChat;
  autor: UsuarioChat;
  hora: string;
  novoDia: boolean;
  rotuloDia: string;
  agrupada: boolean; 
}

const LIMITE_AGRUPAMENTO_MS = 5 * 60_000;

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
   private readonly servico = inject(ChatService);

  usuarioAtual = this.servico.usuarioAtual;
  turmas = this.servico.turmas;

  turmaSelecionadaId = signal<number>(this.turmas()[0]?.id ?? 0);
  canalSelecionadoId = signal<number>(this.turmas()[0]?.canais[0]?.id ?? 0);

  painelMembrosAberto = signal(true);
  rascunho = signal('');

  listaMensagens = viewChild<ElementRef<HTMLElement>>('listaMensagens');

  turmaAtual = computed<TurmaChat | null>(() =>
    this.turmas().find(t => t.id === this.turmaSelecionadaId()) ?? null
  );

  canalAtual = computed<CanalChat | null>(() =>
    this.turmaAtual()?.canais.find(c => c.id === this.canalSelecionadoId()) ?? null
  );

  podeEnviar = computed(() => this.rascunho().trim().length > 0);

  itensMensagens = computed<ItemMensagem[]>(() => {
    const lista = this.servico.mensagensDoCanal(this.canalSelecionadoId());

    return lista.map((mensagem, i) => {
      const anterior = i > 0 ? lista[i - 1] : null;

      const novoDia = !anterior || !this.mesmoDia(anterior.enviadaEm, mensagem.enviadaEm);

      const agrupada =
        !novoDia &&
        anterior !== null &&
        anterior.autorId === mensagem.autorId &&
        mensagem.enviadaEm.getTime() - anterior.enviadaEm.getTime() < LIMITE_AGRUPAMENTO_MS;

      return {
        mensagem,
        autor: this.servico.buscarUsuario(mensagem.autorId),
        hora: this.formatarHora(mensagem.enviadaEm),
        novoDia,
        rotuloDia: this.rotuloDia(mensagem.enviadaEm),
        agrupada,
      };
    });
  });

  membrosDaTurma = computed<UsuarioChat[]>(() => {
    const turma = this.turmaAtual();
    if (!turma) {
      return [];
    }
    return turma.membrosIds.map(id => this.servico.buscarUsuario(id));
  });

  membrosOnline = computed(() => this.membrosDaTurma().filter(m => m.online));
  membrosOffline = computed(() => this.membrosDaTurma().filter(m => !m.online));

  constructor() {
    afterNextRender(() => this.rolarParaOFim());
  }

  selecionarTurma(turma: TurmaChat): void {
    this.turmaSelecionadaId.set(turma.id);
    this.canalSelecionadoId.set(turma.canais[0]?.id ?? 0);
    this.rascunho.set('');
    this.rolarParaOFim();
  }

  selecionarCanal(canal: CanalChat): void {
    this.canalSelecionadoId.set(canal.id);
    this.rascunho.set('');
    this.rolarParaOFim();
  }

  alternarMembros(): void {
    this.painelMembrosAberto.update(aberto => !aberto);
  }

  aoDigitar(evento: Event): void {
    this.rascunho.set((evento.target as HTMLTextAreaElement).value);
  }

  // Enter envia; Shift + Enter quebra a linha (igual ao Discord).
  aoPressionarEnter(evento: Event): void {
    const tecla = evento as KeyboardEvent;
    if (tecla.shiftKey || tecla.isComposing) {
      return;
    }
    tecla.preventDefault();
    this.enviar();
  }

  enviar(): void {
    const canalId = this.canalSelecionadoId();
    if (!this.podeEnviar() || canalId === 0) {
      return;
    }
    this.servico.enviarMensagem(canalId, this.rascunho());
    this.rascunho.set('');
    this.rolarParaOFim();
  }

  iniciais(nome: string): string {
    return nome
      .split(' ')
      .filter(parte => parte.length > 0)
      .slice(0, 2)
      .map(parte => parte[0].toUpperCase())
      .join('');
  }

  private rolarParaOFim(): void {
    setTimeout(() => {
      const elemento = this.listaMensagens()?.nativeElement;
      if (elemento) {
        elemento.scrollTop = elemento.scrollHeight;
      }
    });
  }

  private mesmoDia(a: Date, b: Date): boolean {
    return a.toDateString() === b.toDateString();
  }

  private rotuloDia(data: Date): string {
    const hoje = new Date();
    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);

    if (this.mesmoDia(data, hoje)) {
      return 'Hoje';
    }
    if (this.mesmoDia(data, ontem)) {
      return 'Ontem';
    }
    return data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  private formatarHora(data: Date): string {
    return data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }


}
