import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Tag } from '../Interfaces/tag.interface';

@Injectable()
export class TagService {
    private readonly tags: Tag[] = [];

    create(article: Tag) {
        this.tags.push(article);
    }

    findAll(): Tag[] {
        return this.tags;
    }
}