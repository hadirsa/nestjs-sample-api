import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// import { CustomEmail } from '../core/user/CustomEmail';

@Entity('follows')
export class FollowsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    followerId: number;

    @Column()
    followingId: number;

}
