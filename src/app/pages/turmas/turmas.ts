import { Component, signal } from '@angular/core';

interface Turma {
  id: number;
  nome: string;
  descricao: string;
  membros: number;
  livrosConcluidos: number;
  participacao: number;
  metaTurma: number;
  metaMensal: number;
  acimaDaMedia: boolean;
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
      metaMensal: 175,
      acimaDaMedia: true
    },
    {
      id: 2,
      nome: '3° Ano - Ciências Humanas',
      descricao: 'Turma do Ensino Médio',
      membros: 25,
      livrosConcluidos: 145,
      participacao: 97,
      metaTurma: 120,
      metaMensal: 200,
      acimaDaMedia: true
    },
    {
      id: 3,
      nome: 'Clube de leitura',
      descricao: 'Grupo para compartilhar a leitura',
      membros: 13,
      livrosConcluidos: 69,
      participacao: 72,
      metaTurma: 800,
      metaMensal: 100,
      acimaDaMedia: false
    }
  ]);


  constructor() {
  this.turmaSelecionada.set(this.turmas()[0]);
}

  selecionarAba(aba: 'turmas' | 'relatorios') {
    this.abaSelecionada.set(aba);
  }

  selecionarTurma(turma: Turma) {
    this.turmaSelecionada.set(turma);
  }

  calcularProgresso(turma: Turma): number {
    if (turma.metaTurma === 0) {
      return 0;
    }

    return Math.min(
      Math.round((turma.livrosConcluidos / turma.metaTurma) * 100), 100
    );
  }

  criarTurma(){

  }

}

