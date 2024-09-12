import { Module } from '@nestjs/common';
import { CreditsController } from '../Controllers/credits.controller';
import { CreditsService } from 'src/Services/credits.service';

@Module({
    controllers: [CreditsController],
    providers: [CreditsService],
})

export class CreditsModule {}