import { EntitySchema } from 'typeorm';
import { Article } from 'src/Entity/article.entity';

export const ArticleSchema = new EntitySchema<Article>({
    name: 'Article',
    target: Article,
    tableName: 'article',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        id_user: {
            type: 'int',
            unique: false
        },
        date: {
            type: 'datetime',
            default: () => 'CURRENT_TIMESTAMP'
        },
        title: {
            type: 'varchar',
            length: 50
        },
        content: {
            type: 'longtext'
        },
        id_credits: {
            type: 'int',
            unique: true
        }
    },
    relations: {
        id_user: {
            target: 'User',
            type: 'many-to-one',
            joinColumn: true
        },
        id_credits: {
            target: 'Credits',
            type: 'many-to-one',
            joinColumn: true
        }
    }
});