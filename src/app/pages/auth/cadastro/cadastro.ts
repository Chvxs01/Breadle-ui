import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';

function senhasIguais(grupo: AbstractControl): ValidationErrors | null {
  const senha = grupo.get('senha')?.value;
  const confirmar = grupo.get('confirmar')?.value;
  return senha === confirmar ? null : { senhasDiferentes: true };
}

/**
 * Cadastro PROVISÓRIO (reaproveita o estilo do login).
 * Será refeito conforme as próximas telas do design.
 */
@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: '../login/login.css',
})
export class Cadastro {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  erro = signal('');
  enviado = signal(false);

  form = this.fb.nonNullable.group(
    {
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmar: ['', [Validators.required]],
    },
    { validators: senhasIguais },
  );

  invalido(campo: 'nome' | 'email' | 'senha' | 'confirmar'): boolean {
    const c = this.form.controls[campo];
    return c.invalid && (c.touched || this.enviado());
  }

  cadastrar(): void {
    this.enviado.set(true);
    this.erro.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { nome, email, senha } = this.form.getRawValue();
    const mensagem = this.auth.cadastrar(nome, email, senha);

    if (mensagem) {
      this.erro.set(mensagem);
      return;
    }
    this.router.navigateByUrl('/');
  }
}
