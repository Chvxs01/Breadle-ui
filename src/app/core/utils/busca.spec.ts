import { contem, destacar } from './busca';

describe('busca', () => {

  describe('contem', () => {
    it('ignora maiúsculas e acentos', () => {
      expect(contem('Memórias Póstumas de Brás Cubas', 'POSTUMAS')).toBe(true);
      expect(contem('Macunaíma', 'maCUNAima')).toBe(true);
    });

    it('retorna falso para termo vazio ou inexistente', () => {
      expect(contem('Dom Casmurro', '')).toBe(false);
      expect(contem('Dom Casmurro', '   ')).toBe(false);
      expect(contem('Dom Casmurro', 'xyz')).toBe(false);
    });
  });

  describe('destacar', () => {
    it('marca cada ocorrência do termo', () => {
      const trechos = destacar('Macunaíma', 'a');

      expect(trechos.map(t => t.texto).join('')).toBe('Macunaíma');
      expect(trechos.filter(t => t.destaque).map(t => t.texto)).toEqual(['a', 'a', 'a']);
    });

    it('destaca letras acentuadas quando o termo não tem acento', () => {
      const destacados = destacar('Coração', 'a').filter(t => t.destaque).map(t => t.texto);

      expect(destacados).toEqual(['a', 'ã']);
    });

    it('preserva o texto original (maiúsculas e acentos)', () => {
      const trechos = destacar('Anna Karênina', 'a');

      expect(trechos.map(t => t.texto).join('')).toBe('Anna Karênina');
      expect(trechos[0]).toEqual({ texto: 'A', destaque: true });
    });

    it('devolve um único trecho sem destaque quando o termo é vazio', () => {
      expect(destacar('Dom Casmurro', '')).toEqual([{ texto: 'Dom Casmurro', destaque: false }]);
    });

    it('marca termos com mais de uma letra', () => {
      expect(destacar('Harry Potter', 'pot')).toEqual([
        { texto: 'Harry ', destaque: false },
        { texto: 'Pot', destaque: true },
        { texto: 'ter', destaque: false },
      ]);
    });
  });

});