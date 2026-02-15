import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { DbService } from 'src/core/services/db-service/db.service';
import { CreateClassDto, CreateUserDto, UpdateUserDto } from './resume.dto';
import { ResumeModel } from './resume.schema';
import { ERROR_MESSAGES } from './resume.constants';
import { Model } from 'mongoose';

@Injectable()
export class ResumeService {
  private readonly ResumeModel: typeof ResumeModel;

  constructor(private readonly dbService: DbService) {
    this.ResumeModel = this.dbService.sqlService.ResumeModel;
  }
}
