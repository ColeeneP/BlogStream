import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateCreditsDto } from '../DTO/create-credits.dto';
import { CreditsService } from '../Services/credits.service';
import { Credits } from '../Interfaces/credits.interface';

@Controller('/credits')
export class CreditsController {
    constructor(private creditsService: CreditsService) {}

    @Get()
        async findAll(@Res() res: Response): Promise<void> {
            const credits = await this.creditsService.findAll();
            res.status(HttpStatus.OK).json(credits);
        }

    @Get(':id')
        async findOne(
            @Param('id') id: string, 
            @Res() res:Response) {
                await res.status(HttpStatus.OK).json([]);
        }

    @Post()
        async create(
            @Body() CreateCreditsDto: CreateCreditsDto, 
            @Res() res:Response) {
                await this.creditsService.create(CreateCreditsDto)
                await res.status(HttpStatus.CREATED).send()
        }
    
    @Put(':id')
        update(
            @Param('id') id:string, 
            @Res() res:Response) {
                res.status(HttpStatus.OK).send()
        }

    @Delete(':id')
        remove( 
            @Param('id') id:string, 
            @Res() res:Response) {
                res.status(HttpStatus.OK).send()
        }
}