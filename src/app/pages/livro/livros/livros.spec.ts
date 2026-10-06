import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Livros } from './livros';

describe('Livros', () => {
  let component: Livros;
  let fixture: ComponentFixture<Livros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livros],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Livros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one card per book', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('app-card-livro').length).toBe(component.livros.length);
  });
});