import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('book')
export class BookEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({default: ''})
    description: string;

    @Column({default: ''})
    author: string;
}
