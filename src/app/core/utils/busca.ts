export interface Trecho {
  texto: string;
  destaque: boolean;
}

/**
 * Normaliza um caractere (minúsculo e sem acento), sempre 1 para 1,
 * para que os índices do texto normalizado batam com os do original.
 */
function normalizarCaractere(c: string): string {
  const n = c.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
  return n.length === 1 ? n : c;
}

export function normalizar(texto: string): string {
  return texto.split('').map(normalizarCaractere).join('');
}

/** Verdadeiro se `texto` contém `termo`, ignorando maiúsculas e acentos. */
export function contem(texto: string, termo: string): boolean {
  const t = normalizar(termo.trim());
  return t.length > 0 && normalizar(texto).includes(t);
}

/**
 * Divide `texto` em trechos, marcando cada ocorrência de `termo`
 * (ex.: "Dom Casmurro" + "a" => "Dom C", "a", "smurro").
 */
export function destacar(texto: string, termo: string): Trecho[] {
  const t = normalizar(termo.trim());

  if (!t) {
    return [{ texto, destaque: false }];
  }

  const base = normalizar(texto);
  const trechos: Trecho[] = [];
  let posicao = 0;

  while (true) {
    const indice = base.indexOf(t, posicao);
    if (indice === -1) break;

    if (indice > posicao) {
      trechos.push({ texto: texto.slice(posicao, indice), destaque: false });
    }
    trechos.push({ texto: texto.slice(indice, indice + t.length), destaque: true });
    posicao = indice + t.length;
  }

  if (posicao < texto.length) {
    trechos.push({ texto: texto.slice(posicao), destaque: false });
  }

  return trechos;
}