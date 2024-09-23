import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Credits } from 'src/Entity/credits.entity';
// import { Credits } from '../Interfaces/credits.interface';

@Injectable()
export class CreditsService {
    constructor(
        @InjectRepository(Credits)
        private creditsRepository: Repository<Credits>,
      ) {}
    private readonly credits: Credits[] = [];

    create(credit: Credits) {
        this.credits.push(credit);
    }

    async findAll(): Promise<Credits[]> {
        return this.creditsRepository.find();
    }
}