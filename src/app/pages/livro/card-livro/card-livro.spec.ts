import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CardLivro } from './card-livro';

describe('CardLivro', () => {
  let component: CardLivro;
  let fixture: ComponentFixture<CardLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLivro],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});