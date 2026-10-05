import { Component, signal } from '@angular/core';

interface Meta {
  id: number;
  nome: string;
  progresso: number;
  objetivo: number;
  unidade: string
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
    {
      id: 1,
      nome: "Horas lidas",
      progresso: 7,
      objetivo: 10,
      unidade: 'horas'
    },
    {
      id: 2,
      nome: "livros concluídos",
      progresso: 3,
      objetivo: 5,
      unidade: 'livros concluídos'
    }
  ]);

  metaMensais = signal<Meta[]> ([
    {
      id: 1,
      nome: 'Horas lidas',
      progresso: 12,
      objetivo: 13,
      unidade: 'horas'
    },

    {
      id: 2,
      nome: 'Livros concluídos',
      progresso: 12,
      objetivo: 15,
      unidade: 'livros'
    }
  ]);

  selecionarPeriodo(periodo: 'semanal' | 'mensal') {
    this.periodoSelecionado.set(periodo);
  }

  calcularPorcentagem(meta: Meta) {
    return Math.min(
      Math.round((meta.progresso / meta.objetivo) * 100), 100
    );
  }

  metasAtuais() {
    return this.periodoSelecionado() === 'semanal'
    ? this.metasSemanais()
    : this.metaMensais();
  }

  criarMetas() {
    
  }
}
