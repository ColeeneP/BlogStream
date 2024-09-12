import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'int',
        unique: false
    })
    id_user: number;

    @Column({ 
        default: new Date() 
    })
    date: Date;

    @Column({
        type: 'varchar',
        length: 50
    })
    title: string;

    @Column({
        type: 'longtext'
    })
    content: string;

    @Column({
        type: 'int',
        unique: true
    })
    id_credits: number;
}