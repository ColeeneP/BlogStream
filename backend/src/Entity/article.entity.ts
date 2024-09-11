import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column({ default: new Date() })
    date: Date;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    id_credits: number;
}