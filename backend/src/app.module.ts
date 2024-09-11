import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Credits } from './Entity/credits.entity';
import { ArticleTag } from './Entity/article_tag.entity';
import { Article } from './Entity/article.entity';
import { Tag } from './Entity/tag.entity';
import { User } from './Entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'blogueur',
      password: 'blogueur',
      database: 'blogdb',
      entities: [ArticleTag, Article, Credits, Tag, User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
