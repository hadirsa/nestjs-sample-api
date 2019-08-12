import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('books')
@Controller('books')
export class BookController {
    constructor(private booksService: BookService) { }

    @ApiOperation({title: 'Get all books'})
    @ApiResponse({status: 200, description: 'Return all books.'})
    @Get()
    async getBooks() {
        return await this.booksService.findAll();
    }

    @Get(':id')
    async getBook(@Param('id') id) {
        return await this.booksService.findById(id);
    }

    @Post()
    async addBook(@Body() createBookDTO: BookDto) {
        return await this.booksService.create(createBookDTO);
    }

    @Delete()
    async deleteBook(@Query() query) {
        console.log(query);
        return await this.booksService.delete(query.id);
    }
}
