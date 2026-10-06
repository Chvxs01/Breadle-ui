import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate reading progress', () => {
    // 57 de 264 páginas ≈ 22%
    expect(component.progresso()).toBe(22);
  });

  it('should render one shortcut per entry', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.atalho').length).toBe(component.atalhos.length);
  });
});