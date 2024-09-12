import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 35
    })
    pseudo: string;

    @Column({
        type: 'varchar',
        length: 255
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 255
    })
    password: string;

    @Column({
        type: 'char',
        length: 10
    })
    phone: string;
}