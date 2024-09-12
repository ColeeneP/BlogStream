import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ArticleTag } from '../Interfaces/article_tag.interface';

@Injectable()
export class ArticleTagService {
    private readonly article_tags: ArticleTag[] = [];

    create(article_tag: ArticleTag) {
        this.article_tags.push(article_tag);
    }

    findAll(): ArticleTag[] {
        return this.article_tags;
    }
}