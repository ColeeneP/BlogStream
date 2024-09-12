import { EntitySchema } from 'typeorm';
import { Tag } from 'src/Entity/tag.entity';

export const TagSchema = new EntitySchema<Tag>({
    name: 'Tag',
    target: Tag,
    tableName: 'tag',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        category: {
            type: 'varchar',
            length: 30
        }
    }
});