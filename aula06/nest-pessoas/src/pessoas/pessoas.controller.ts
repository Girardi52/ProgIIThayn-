import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { Pessoa } from './pessoa.entity';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post()
  create(@Body() pessoa: Omit<Pessoa, 'id'>) {
    return this.pessoasService.create(pessoa);
  }

  @Get()
  findAll() {
    return this.pessoasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dados: Partial<Pessoa>) {
    return this.pessoasService.update(+id, dados);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.pessoasService.remove(+id);
    return { removido: true };
  }
}
