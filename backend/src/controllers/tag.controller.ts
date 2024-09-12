import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { TagService } from '../Services/tag.service';
import { Tag } from '../Interfaces/tag.interface';

@Controller('/tag')
export class TagController {
    constructor(private tagService: TagService) {}
}