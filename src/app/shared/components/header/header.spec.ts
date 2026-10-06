import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit menuClicado when the menu button is clicked', () => {
    let emitiu = false;
    component.menuClicado.subscribe(() => (emitiu = true));

    const botao = (fixture.nativeElement as HTMLElement).querySelector(
      '.menu-button'
    ) as HTMLButtonElement;
    botao.click();

    expect(emitiu).toBe(true);
  });
});