import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CardLivro } from './card-livro';
import { Livro } from '../../../core/models/livro';

const livro: Livro = {
  id: 3,
  titulo: 'Livro de teste',
  autor: 'Autora Teste',
  descricao: 'Descrição',
  capaUrl: 'livros/teste.jpg',
};

describe('CardLivro', () => {
  let fixture: ComponentFixture<CardLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLivro],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLivro);
    fixture.componentRef.setInput('livro', livro);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should link to the book details with its id and title as label', () => {
    const link = (fixture.nativeElement as HTMLElement).querySelector('a');
    expect(link?.getAttribute('href')).toBe('/livro/detalhes/3');
    expect(link?.getAttribute('aria-label')).toBe('Livro de teste');
  });

  it('should emit destacar when the mouse enters', () => {
    let emitido: Livro | undefined;
    fixture.componentInstance.destacar.subscribe(l => (emitido = l));

    const link = (fixture.nativeElement as HTMLElement).querySelector('a');
    link?.dispatchEvent(new Event('mouseenter'));

    expect(emitido?.id).toBe(3);
  });

  it('should show a lock only when the book is unavailable', async () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.cadeado')).toBeNull();

    fixture.componentRef.setInput('livro', { ...livro, status: 'indisponível' as const });
    await fixture.whenStable();

    expect(el.querySelector('.cadeado')).toBeTruthy();
  });
});