import {HttpException, Injectable, Logger} from '@nestjs/common';
//import { BOOKS } from '../../shared/mocks/books.mock';
import {BOOKS} from "../shared/mocks/books.mock";
import {Repository, DeleteResult} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {BookEntity} from "./book.entity";

@Injectable()
export class BookService {
    private readonly logger = new Logger(BookService.name);

    books = BOOKS;

    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {
    }
    async findAll(): Promise<BookEntity[]> {
        return await this.bookRepository.find();
    }

    async findById(id:number): Promise<BookEntity> {
        const user = await this.bookRepository.findOne(id);
        return user;
    }

    async create(book): Promise<BookEntity[]> {
        return await this.bookRepository.save(book);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.bookRepository.delete({ id: id});
    }
}
