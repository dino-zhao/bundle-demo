import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'TestConfig',
      useValue: { a: 1 },
    },
  ],
})
export class CatsModule {}
