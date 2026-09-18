import { Component } from '@angular/core';
import { ContainerComponent } from "../../../shared/components/container/container";
import { CapaLivro } from '../../../shared/components/capa-livro/capa-livro';

@Component({
  selector: 'app-detalhes',
  imports: [ContainerComponent, CapaLivro],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class Detalhes {
livro: any;

}
