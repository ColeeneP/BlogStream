import { Module } from '@nestjs/common';
import { ArticleController } from '../Controllers/article.controller';
import { ArticlesService } from '../Services/article.service';

@Module({
    controllers: [ArticleController],
    providers: [ArticlesService],
})

export class ArticleModule {}