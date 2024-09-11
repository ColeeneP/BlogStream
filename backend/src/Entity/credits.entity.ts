import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credits {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;
}