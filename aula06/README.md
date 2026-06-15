# Aula 06 — Módulos e CRUD REST API (NestJS)

Módulo `pessoas` gerado seguindo o padrão do NestJS (`nest generate resource pessoas`),
com CRUD básico ainda em memória (sem banco de dados — isso vem na aula 09-10 com o TypeORM).

## Estrutura
- `pessoa.entity.ts` — modelo da entidade
- `pessoas.service.ts` — regras de negócio (armazenamento em memória)
- `pessoas.controller.ts` — rotas REST (`GET`, `POST`, `PATCH`, `DELETE` em `/pessoas`)
- `pessoas.module.ts` — módulo que agrupa controller e service
- `app.module.ts` — módulo raiz que importa `PessoasModule`

## Rodando o projeto
```bash
npm i -g @nestjs/cli
nest new nest-pessoas
# substitua os arquivos gerados pelos desta pasta
npm run start
```
