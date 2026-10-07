import { Component, inject, signal } from '@angular/core';
import { Atividade } from '../../core/models/atividade.models';
import { AtividadesService } from '../../core/services/atividade.service';

@Component({
  selector: 'app-atividades',
  imports: [],
  templateUrl: './atividades.html',
  styleUrl: './atividades.css',
})

export class Atividades {
  private readonly servico = inject(AtividadesService);

  filtro = signal<'todas' | 'pessoal' | 'turma'>('todas');

  pessoais = this.servico.pessoais;
  daTurma = this.servico.daTurma;
  pendentes = this.servico.pendentes;

  selecionarFiltro(filtro: 'todas' | 'pessoal' | 'turma'): void {
    this.filtro.set(filtro);
  }

  listaFiltrada(): Atividade[] {
    switch (this.filtro()) {
      case 'pessoal':
        return this.pessoais();
      case 'turma':
        return this.daTurma();
      default:
        return this.servico.atividades();
    }
  }

  calcularPorcentagem(atividade: Atividade): number {
    return this.servico.calcularPorcentagem(atividade);
  }

  rotuloStatus(status: Atividade['status']): string {
    switch (status) {
      case 'concluida':
        return 'Concluída';
      case 'em_andamento':
        return 'Em andamento';
      default:
        return 'Pendente';
    }
  }

}
