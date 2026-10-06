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

  describe('busca', () => {
    const el = () => fixture.nativeElement as HTMLElement;

    async function digitar(texto: string): Promise<void> {
      const campo = el().querySelector('.busca input') as HTMLInputElement;
      campo.value = texto;
      campo.dispatchEvent(new Event('input'));
      await fixture.whenStable();
    }

    it('não mostra o painel enquanto nada foi digitado', () => {
      expect(el().querySelector('.painel-busca')).toBeNull();
    });

    it('lista os livros encontrados, com as letras do termo destacadas', async () => {
      await digitar('harry');

      const itens = el().querySelectorAll('.resultado');
      const capas = el().querySelectorAll('.capa-resultado');

      expect(itens.length).toBe(7);
      expect(capas.length).toBe(7);
      expect(itens[0].querySelector('.destaque')?.textContent).toBe('Harry');
    });

    it('ignora acentos e maiúsculas', async () => {
      await digitar('CAMARA');

      const itens = el().querySelectorAll('.resultado');

      expect(itens.length).toBe(1);
      expect(itens[0].textContent).toContain('Câmara Secreta');
    });

    it('avisa quando nada é encontrado', async () => {
      await digitar('xyzxyz');

      expect(el().querySelector('.sem-resultados')).not.toBeNull();
      expect(el().querySelectorAll('.resultado').length).toBe(0);
    });

    it('fecha o painel ao pressionar Escape', async () => {
      await digitar('harry');

      (el().querySelector('.app-header') as HTMLElement).dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
      );
      await fixture.whenStable();

      expect(el().querySelector('.painel-busca')).toBeNull();
      expect(component.termo()).toBe('');
    });
  });
});