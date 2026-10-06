import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { Detalhes } from './detalhes';

describe('Detalhes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'livro/detalhes/:id', component: Detalhes }]),
      ],
    });
  });

  it('should show the book matching the route id', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/livro/detalhes/2', Detalhes);

    const titulo = harness.routeNativeElement?.querySelector('h1');
    expect(titulo?.textContent).toContain('Câmara Secreta');
  });

  it('should show a message when the book does not exist', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/livro/detalhes/999', Detalhes);

    expect(harness.routeNativeElement?.textContent).toContain('Livro não encontrado');
  });
});