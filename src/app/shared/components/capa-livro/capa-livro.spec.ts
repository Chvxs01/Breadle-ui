import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaLivro } from './capa-livro';

describe('CapaLivro', () => {
  let component: CapaLivro;
  let fixture: ComponentFixture<CapaLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapaLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapaLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
