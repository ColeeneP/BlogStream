import { EntitySchema } from 'typeorm';
import { User } from 'src/Entity/user.entity';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    tableName: 'user',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        pseudo: {
            type: 'varchar',
            length: 35
        },
        email: {
            type: 'varchar',
            length: 255
        },
        password: {
            type: 'varchar',
            length: 255
        },
        phone: {
            type: 'char',
            length: 10
        }
    }
});