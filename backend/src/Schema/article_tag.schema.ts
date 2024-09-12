import { EntitySchema } from 'typeorm';
import { ArticleTag } from 'src/Entity/article_tag.entity';

export const ArticleTagSchema = new EntitySchema<ArticleTag>({ 
    name: 'ArticleTag',
    target: ArticleTag,
    tableName: 'article_tag',
    columns: {
        id_article: {
            primary: true,
            type: 'int'
        },
        id_tag: {
            primary: true,
            type: 'int'
        }
    },
    relations: {
        id_article: {
            target: 'Article',
            type: 'many-to-one',
            joinColumn: true
        },
        id_tag: {
            target: 'Tag',
            type: 'many-to-one',
            joinColumn: true
        }
    }
});