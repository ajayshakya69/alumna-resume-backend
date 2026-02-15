import {
  Controller,
  Get,
  Post,
  Put,
  Query,
  Body,
  ParseUUIDPipe,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResumeService } from './resume.service';

@ApiTags('Users & Developers')
@Controller('users')
// @UseGuards(InternalCallGuard)
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
}
