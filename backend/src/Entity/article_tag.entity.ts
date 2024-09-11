import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ArticleTag {
    @PrimaryColumn()
    id_article: number;

    @PrimaryColumn()
    id_tag: number;
}