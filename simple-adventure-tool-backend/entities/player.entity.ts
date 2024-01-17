import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn()
    player_id: number;

    @Column({ unique: true, collation: 'utf8_general_ci' })
    player_login: string;

    @Column()
    player_password: string;

    @Column({default: null})
    player_token: string;
}
