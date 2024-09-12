import { Module } from '@nestjs/common';
import { ArticleTagController } from '../Controllers/article_tag.controller';
import { ArticleTagService } from '../Services/article_tag.service';

@Module({
    controllers: [ArticleTagController],
    providers: [ArticleTagService],
})

export class CreditsModule {}