import { Component, computed, signal } from '@angular/core';

interface Meta {
  id: number;
  nome: string;
  progresso: number;
  objetivo: number;
  unidade: string;
}

interface DiaGrafico {
  nome: string;
  altura: number; // porcentagem
}

@Component({
  selector: 'app-metas',
  imports: [],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class Metas {

  periodoSelecionado = signal<'semanal' | 'mensal'>('semanal');

  metasSemanais = signal<Meta[]>([
    { id: 1, nome: 'Horas lidas', progresso: 7, objetivo: 10, unidade: 'horas' },
    { id: 2, nome: 'Livros concluídos', progresso: 3, objetivo: 5, unidade: 'livros' }
  ]);

  metasMensais = signal<Meta[]>([
    { id: 1, nome: 'Horas lidas', progresso: 12, objetivo: 13, unidade: 'horas' },
    { id: 2, nome: 'Livros concluídos', progresso: 12, objetivo: 15, unidade: 'livros' }
  ]);

  // Valores provisórios até existir backend
  mediaSemanalHoras = 10;
  mediaDiariaHoras = 2;

  diasGrafico: DiaGrafico[] = [
    { nome: 'Dom', altura: 70 },
    { nome: 'Seg', altura: 35 },
    { nome: 'Ter', altura: 55 },
    { nome: 'Qua', altura: 45 },
    { nome: 'Qui', altura: 60 },
    { nome: 'Sex', altura: 50 },
    { nome: 'Sab', altura: 75 },
  ];

  metasAtuais = computed(() =>
    this.periodoSelecionado() === 'semanal'
      ? this.metasSemanais()
      : this.metasMensais()
  );

  todasMetasAtingidas = computed(() => {
    const metas = this.metasAtuais();
    return metas.length > 0 && metas.every(m => m.progresso >= m.objetivo);
  });

  selecionarPeriodo(periodo: 'semanal' | 'mensal'): void {
    this.periodoSelecionado.set(periodo);
  }

  calcularPorcentagem(meta: Meta): number {
    if (meta.objetivo === 0) {
      return 0;
    }
    return Math.min(Math.round((meta.progresso / meta.objetivo) * 100), 100);
  }

  criarMetas(): void {
    // TODO: implementar criação de metas
  }
}