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
    return await this.ResumeModel.create({ user_id, ...data });
  }

  async findAll(user_id: string) {
    return await this.ResumeModel.findAll({
      where: { user_id },
      attributes: [
        'id',
        'user_id',
        'resume_link',
        'personal_info',
        'created_at',
        'updated_at',
      ],
      order: [['created_at', 'DESC']],
    });
  }

  async findOne(id: string) {
    const resume = await this.ResumeModel.findByPk(id);

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    return resume.dataValues;
  }

  async update(id: string, updateDto: UpdateResumeDto) {
    const resume = await this.ResumeModel.findByPk(id);

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    await resume.update(updateDto);

    return resume;
  }

  async delete(id: string) {
    const resume = await this.ResumeModel.findByPk(id);

    if (!resume) {
      throw new NotFoundException('Resume not found');
    }

    await resume.destroy();

    return {
      message: 'Resume deleted successfully',
    };
  }
}
