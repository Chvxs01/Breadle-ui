import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat } from './chat';

describe('Chat', () => {
  let component: Chat;
  let fixture: ComponentFixture<Chat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve enviar uma mensagem e limpar o rascunho', () => {
    const antes = component.itensMensagens().length;

    component.rascunho.set('  Olá, turma!  ');
    component.enviar();

    const itens = component.itensMensagens();
    expect(itens.length).toBe(antes + 1);
    expect(itens[itens.length - 1].mensagem.texto).toBe('Olá, turma!');
    expect(component.rascunho()).toBe('');
  });

  it('não deve enviar mensagem vazia', () => {
    const antes = component.itensMensagens().length;

    component.rascunho.set('   ');
    component.enviar();

    expect(component.itensMensagens().length).toBe(antes);
  });

  it('deve trocar de canal ao selecionar outra turma', () => {
    const turma = component.turmas()[1];
    component.selecionarTurma(turma);

    expect(component.turmaSelecionadaId()).toBe(turma.id);
    expect(component.canalSelecionadoId()).toBe(turma.canais[0].id);
  });
});
