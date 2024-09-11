import { Injectable } from '@nestjs/common';
import { Credits } from '../Interfaces/credits.interface';

@Injectable()
export class CreditsService {
    private readonly credits: Credits[] = [];

    create(credit: Credits) {
        this.credits.push(credit);
    }

    findAll(): Credits[] {
        return this.credits;
    }
}