import { IsString } from 'class-validator';
export class BookDto {
    readonly id: number;
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    author: string;
}
