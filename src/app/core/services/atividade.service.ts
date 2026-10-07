import { Injectable } from "@angular/core";
import { computed } from "@angular/core";
import { signal } from "@angular/core";
import { Atividade } from "../models/atividade.models";

@Injectable({ providedIn: 'root' })
export class AtividadesService {
  private readonly _atividades = signal<Atividade[]>([
    {
      id: 1,
      titulo: 'Meta semanal de livros',
      descricao: 'Conclua mais 2 livros para atingir a meta da semana.',
      tipo: 'pessoal',
      status: 'em_andamento',
      progresso: 3,
      objetivo: 5,
      unidade: 'livros',
      prazo: 'Domingo',
    },
    {
      id: 2,
      titulo: 'Horas de leitura (semana)',
      descricao: 'Faltam 3 horas para completar a meta semanal de leitura.',
      tipo: 'pessoal',
      status: 'em_andamento',
      progresso: 7,
      objetivo: 10,
      unidade: 'horas',
      prazo: 'Domingo',
    },
    {
      id: 3,
      titulo: 'Meta mensal pessoal',
      descricao: 'Leia 15 livros neste mês. Você está quase lá!',
      tipo: 'pessoal',
      status: 'em_andamento',
      progresso: 12,
      objetivo: 15,
      unidade: 'livros',
      prazo: 'Fim do mês',
    },
    {
      id: 4,
      titulo: 'Meta da turma — Desenvolvimento',
      descricao: 'A turma precisa atingir 100 livros concluídos este período.',
      tipo: 'turma',
      status: 'concluida',
      progresso: 110,
      objetivo: 100,
      unidade: 'livros',
      turmaNome: '3° Ano - Desenvolvimento',
    },
    {
      id: 5,
      titulo: 'Participação da turma',
      descricao: 'Ajude a turma a manter a participação acima de 80%.',
      tipo: 'turma',
      status: 'em_andamento',
      progresso: 87,
      objetivo: 100,
      unidade: '%',
      turmaNome: '3° Ano - Desenvolvimento',
    },
    {
      id: 6,
      titulo: 'Meta da turma — Ciências Humanas',
      descricao: 'Faltam livros para a meta coletiva da turma.',
      tipo: 'turma',
      status: 'em_andamento',
      progresso: 145,
      objetivo: 200,
      unidade: 'livros',
      turmaNome: '3° Ano - Ciências Humanas',
      prazo: 'Fim do mês',
    },
  ]);

  readonly atividades = this._atividades.asReadonly();

  readonly pessoais = computed(() =>
    this._atividades().filter((a) => a.tipo === 'pessoal')
  );

  readonly daTurma = computed(() =>
    this._atividades().filter((a) => a.tipo === 'turma')
  );

  readonly pendentes = computed(() =>
    this._atividades().filter((a) => a.status !== 'concluida')
  );

  calcularPorcentagem(atividade: Atividade): number {
    if (atividade.objetivo === 0) {
      return 0;
    }
    return Math.min(
      Math.round((atividade.progresso / atividade.objetivo) * 100),
      100
    );
  }
}