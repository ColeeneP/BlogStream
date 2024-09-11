import { Module } from '@nestjs/common';
import { CreditsController } from '../controllers/credits.controller';
import { CreditsService } from 'src/services/credits.service';

@Module({
    controllers: [CreditsController],
    providers: [CreditsService],
})

export class CreditsModule {}