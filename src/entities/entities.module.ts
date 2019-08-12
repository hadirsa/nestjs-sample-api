import { Module } from '@nestjs/common';
import { BookModule } from './books/bookModule';

@Module({
    imports: [BookModule]
})
export class EntitiesModule {}
