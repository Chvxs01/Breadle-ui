import { Injectable, signal } from '@angular/core';

export interface Usuario {
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'breadle_usuario';

  private _usuario = signal<Usuario | null>(this.carregarUsuario());

  readonly usuario = this._usuario.asReadonly();

  logado(): boolean {
    return this._usuario() !== null;
  }

  entrar(email: string, senha: string, lembrar: boolean): string | null {
    if (!email || !senha) {
      return 'Preencha todos os campos.';
    }

    const usuario: Usuario = {
      nome: email.split('@')[0],
      email,
    };

    this._usuario.set(usuario);

    if (lembrar) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));
    } else {
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));
    }

    return null; // null = sucesso
  }

  cadastrar(nome: string, email: string, senha: string): string | null {
    if (!nome || !email || !senha) {
      return 'Preencha todos os campos.';
    }

    if (senha.length < 6) {
      return 'A senha deve ter pelo menos 6 caracteres.';
    }

    const usuario: Usuario = { nome, email };
    this._usuario.set(usuario);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));

    return null; // null = sucesso
  }

  sair(): void {
    this._usuario.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
    sessionStorage.removeItem(this.STORAGE_KEY);
  }

  private carregarUsuario(): Usuario | null {
    const salvo = localStorage.getItem(this.STORAGE_KEY) 
               || sessionStorage.getItem(this.STORAGE_KEY);

    if (!salvo) return null;

    try {
      return JSON.parse(salvo) as Usuario;
    } catch {
      return null;
    }
  }
}