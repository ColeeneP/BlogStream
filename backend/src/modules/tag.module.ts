import { Module } from '@nestjs/common';
import { TagController } from '../Controllers/tag.controller';
import { TagService } from '../Services/tag.service';

@Module({
    controllers: [TagController],
    providers: [TagService],
})

export class TagModule {}