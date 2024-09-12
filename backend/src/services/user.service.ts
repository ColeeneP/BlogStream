import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../Interfaces/user.interface';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    create(user: User) {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }
}