import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Summoner extends BaseEntity {
    @PrimaryGeneratedColumn()
    summoner_id: number;

    @Column()
    player_id: number;

    @Column({unique: true, length: 20, collation: 'utf8_general_ci'})
    summoner_nickname: string;

    @Column({type: 'int', default: () => 0})
    summoner_experience: number;

    @Column({length: 70, collation: 'utf8_general_ci'})
    summoner_outfit: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
