import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Credits } from './Entity/credits.entity';
import { ArticleTag } from './Entity/article_tag.entity';
import { Article } from './Entity/article.entity';
import { Tag } from './Entity/tag.entity';
import { User } from './Entity/user.entity';

import { CreditsController } from './Controllers/credits.controller';
import { CreditsService } from './Services/credits.service';
import { ArticleTagSchema } from './Schema/article_tag.schema';
import { ArticleSchema } from './Schema/article.schema';
import { CreditsSchema } from './Schema/credits.schema';
import { TagSchema } from './Schema/tag.schema';
import { UserSchema } from './Schema/user.schema';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [ArticleTag, Article, Credits, Tag, User],
        synchronize: true,
      }),
    TypeOrmModule.forFeature([ArticleTagSchema]),
    TypeOrmModule.forFeature([ArticleSchema]),
    TypeOrmModule.forFeature([CreditsSchema]),
    TypeOrmModule.forFeature([TagSchema]),
    TypeOrmModule.forFeature([UserSchema]),
  ],
  controllers: [AppController, CreditsController],
  providers: [AppService, CreditsService],
})
export class AppModule {}
