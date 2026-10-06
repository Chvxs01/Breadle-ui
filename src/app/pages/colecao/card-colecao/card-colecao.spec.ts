import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColecao } from './card-colecao';

describe('CardColecao', () => {
  let component: CardColecao;
  let fixture: ComponentFixture<CardColecao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardColecao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardColecao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
