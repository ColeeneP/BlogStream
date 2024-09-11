import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CreditsController } from './controllers/credits.controller';
import { CreditsService } from './services/credits.service';

@Module({
  imports: [],
  controllers: [AppController, CreditsController],
  providers: [AppService, CreditsService],
})
export class AppModule {}
