import { Component, input, output, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NotificacoesService } from '../../../core/services/notificacao.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})

export class Sidebar {
  aberto = input<boolean>(false);
  fechar = output<void>();

  private readonly notificacoesService = inject(NotificacoesService);
   contadorNotificacoes = this.notificacoesService.contadorNaoLidas;
}