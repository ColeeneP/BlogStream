import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ArticlesService } from '../Services/article.service';
import { Article } from '../Interfaces/article.interface';

@Controller('/article')
export class ArticleController {
    constructor(private articleService: ArticlesService) {}
}