import { TestBed } from '@angular/core/testing';

import { LivroService } from './livro-service';

describe('LivroService', () => {
  let service: LivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list books with unique ids', () => {
    const ids = service.listar().map(l => l.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should find a book by id', () => {
    expect(service.buscarPorId(2)?.titulo).toContain('Câmara Secreta');
  });

  it('should return undefined for an unknown id', () => {
    expect(service.buscarPorId(999)).toBeUndefined();
  });
});