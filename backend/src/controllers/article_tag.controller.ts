import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ArticleTagService } from '../Services/article_tag.service';
import { ArticleTag } from '../Interfaces/article_tag.interface';

@Controller('/article_tag')
export class ArticleTagController {
    constructor(private articleTagService: ArticleTagService) {}
}