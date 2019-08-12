import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {BookController} from './book.controller';
import {BookService} from './book.service';
import {AuthMiddleware} from '../core/auth/auth.middleware';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BookEntity} from "./book.entity";
import {UserModule} from "../core/user/user.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity]),
        UserModule
    ],
    providers: [BookService],
    controllers: [
        BookController
    ],
    exports: [BookService]
})
export class BookModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(
                {path: 'books', method: RequestMethod.POST},
                {path: 'books/:id', method: RequestMethod.GET},
                {path: 'books', method: RequestMethod.GET},
                {path: 'books/:id', method: RequestMethod.DELETE});
    }
}


