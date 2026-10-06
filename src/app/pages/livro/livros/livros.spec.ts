import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Livros } from './livros';

describe('Livros', () => {
  let component: Livros;
  let fixture: ComponentFixture<Livros>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livros],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Livros);
    component = fixture.componentInstance;
    el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one cover per book in the carousel', () => {
    expect(el.querySelectorAll('app-card-livro').length).toBe(component.livros.length);
  });

  it('should show the first book in the highlight by default', () => {
    expect(el.querySelector('h1')?.textContent).toContain(component.livros[0].titulo);
  });

  it('should show the details of the hovered book', async () => {
    const links = el.querySelectorAll<HTMLAnchorElement>('app-card-livro a');
    links[2].dispatchEvent(new Event('mouseenter'));
    await fixture.whenStable();

    expect(el.querySelector('h1')?.textContent).toContain(component.livros[2].titulo);
  });
});