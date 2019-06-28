import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';
import { BooksModule } from './books/books.module';

@Module({
    imports: [ArticleModule, TagModule, BooksModule],
    providers: [],
    controllers: [],
    exports: []
})
export class EntitiesModule {
}
