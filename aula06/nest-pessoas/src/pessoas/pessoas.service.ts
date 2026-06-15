import { Injectable } from '@nestjs/common';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoasService {
  private pessoas: Pessoa[] = [];
  private nextId = 1;

  create(pessoa: Omit<Pessoa, 'id'>): Pessoa {
    const nova: Pessoa = { id: this.nextId++, ...pessoa };
    this.pessoas.push(nova);
    return nova;
  }

  findAll(): Pessoa[] {
    return this.pessoas;
  }

  findOne(id: number): Pessoa | undefined {
    return this.pessoas.find((p) => p.id === id);
  }

  update(id: number, dados: Partial<Pessoa>): Pessoa | undefined {
    const pessoa = this.findOne(id);
    if (!pessoa) return undefined;
    Object.assign(pessoa, dados);
    return pessoa;
  }

  remove(id: number): void {
    this.pessoas = this.pessoas.filter((p) => p.id !== id);
  }
}
