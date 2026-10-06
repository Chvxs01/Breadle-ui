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

  it('should link to the book details with its id', () => {
    const link = (fixture.nativeElement as HTMLElement).querySelector('a');
    expect(link?.getAttribute('href')).toBe('/livro/detalhes/3');
  });

  it('should show the title and author', () => {
    const texto = (fixture.nativeElement as HTMLElement).textContent;
    expect(texto).toContain('Livro de teste');
    expect(texto).toContain('Autora Teste');
  });
});