import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesColecao } from './detalhes-colecao';

describe('DetalhesColecao', () => {
  let component: DetalhesColecao;
  let fixture: ComponentFixture<DetalhesColecao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesColecao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesColecao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
