import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/core/services/db-service/db.service';
import { CreateResumeDto, UpdateResumeDto } from './resume.dto';
import { ResumeModel } from './resume.schema';

@Injectable()
export class ResumeService {
  private readonly ResumeModel: typeof ResumeModel;

  constructor(private readonly dbService: DbService) {
    this.ResumeModel = this.dbService.sqlService.ResumeModel;
  }

  async create(user_id: string, data: CreateResumeDto) {
    const existing = await this.ResumeModel.findOne({ where: { user_id } });

    if (existing) {
      await existing.update(data);
      return existing;
    }

    return this.ResumeModel.create({ user_id, ...data });
  }

  async findById(id: string) {
    const resume = await this.ResumeModel.findOne({
      where: { id },
    });

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    return resume;
  }

  async findMyResume(user_id: string) {
    const resume = await this.ResumeModel.findOne({
      where: { user_id },
    });

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    return resume;
  }

  async update(user_id: string, updateDto: UpdateResumeDto) {
    const resume = await this.ResumeModel.findOne({
      where: { user_id },
    });

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    await resume.update(updateDto);

    return resume;
  }

  async delete(user_id: string) {
    const resume = await this.ResumeModel.findOne({
      where: { user_id },
    });

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    await resume.destroy();

    return {
      message: 'Resume deleted successfully',
    };
  }
}
