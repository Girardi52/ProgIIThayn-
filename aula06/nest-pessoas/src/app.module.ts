import { Module } from '@nestjs/common';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [PessoasModule],
})
export class AppModule {}
