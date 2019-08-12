import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CoreModule } from './core/core.module';
import { BookModule } from "./api/book/bookModule";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        CoreModule,
        BookModule
    ],
    controllers: [
        AppController
    ],
    providers: [],

})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {
    }
}

