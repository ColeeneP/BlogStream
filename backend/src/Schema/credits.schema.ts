import { EntitySchema } from 'typeorm';
import { Credits } from 'src/Entity/credits.entity';

export const CreditsSchema = new EntitySchema<Credits>({
    name: 'Credits',
    target: Credits,
    tableName: 'credits',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        content: {
            type: 'text',
            unique: false
        }
    }
});