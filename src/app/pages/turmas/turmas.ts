import { Component, computed, signal } from '@angular/core';

interface Turma {
  id: number;
  nome: string;
  descricao: string;
  membros: number;
  livrosConcluidos: number;
  participacao: number;
  metaTurma: number;
  metaMensal: number;
}

@Component({
  selector: 'app-turmas',
  imports: [],
  templateUrl: './turmas.html',
  styleUrl: './turmas.css',
})
export class Turmas {

  abaSelecionada = signal<'turmas' | 'relatorios'>('turmas');

  turmaSelecionada = signal<Turma | null>(null);

  turmas = signal<Turma[]>([
    {
      id: 1,
      nome: '3° Ano - Desenvolvimento',
      descricao: 'Turma de desenvolvimento de sistemas',
      membros: 18,
      livrosConcluidos: 110,
      participacao: 87,
      metaTurma: 100,
      metaMensal: 175
    },
    {
      id: 2,
      nome: '3° Ano - Ciências Humanas',
      descricao: 'Turma do Ensino Médio',
      membros: 25,
      livrosConcluidos: 145,
      participacao: 97,
      metaTurma: 120,
      metaMensal: 200
    },
    {
      id: 3,
      nome: 'Clube de leitura',
      descricao: 'Grupo para compartilhar a leitura',
      membros: 13,
      livrosConcluidos: 69,
      participacao: 72,
      metaTurma: 800, // TODO: confirmar, pode ser 80
      metaMensal: 100
    }
  ]);

  totalLivros = computed(() =>
    this.turmas().reduce((soma, t) => soma + t.livrosConcluidos, 0)
  );

  participacaoMedia = computed(() => {
    const lista = this.turmas();
    if (lista.length === 0) {
      return 0;
    }
    const soma = lista.reduce((s, t) => s + t.participacao, 0);
    return Math.round(soma / lista.length);
  });

  percentualTurmasNaMeta = computed(() => {
    const lista = this.turmas();
    if (lista.length === 0) {
      return 0;
    }
    const naMeta = lista.filter(t => this.atingiuMeta(t)).length;
    return Math.round((naMeta / lista.length) * 100);
  });

  constructor() {
    this.turmaSelecionada.set(this.turmas()[0] ?? null);
  }

  selecionarAba(aba: 'turmas' | 'relatorios'): void {
    this.abaSelecionada.set(aba);
  }

  selecionarTurma(turma: Turma): void {
    this.turmaSelecionada.set(turma);
  }

  atingiuMeta(turma: Turma): boolean {
    return turma.livrosConcluidos >= turma.metaTurma;
  }

  calcularProgresso(turma: Turma): number {
    if (turma.metaTurma === 0) {
      return 0;
    }
    return Math.min(
      Math.round((turma.livrosConcluidos / turma.metaTurma) * 100), 100
    );
  }

  criarTurma(): void {
    // TODO: implementar criação de turma
  }

}