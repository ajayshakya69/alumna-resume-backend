import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ResumeService } from './resume.service';
import { CreateResumeDto, UpdateResumeDto } from './resume.dto';
import { SSOAuthGuard } from 'src/core/guards/guards';
import { RequestDto } from 'src/core/dtos/request.dto';

@ApiTags('Resumes')
@Controller('resumes')
@ApiBearerAuth()
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'Create resume' })
  create(@Body() createResumeDto: CreateResumeDto, @Req() req: RequestDto) {
    return this.resumeService.create(req.user.id, createResumeDto);
  }

  @Get()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'Get my resume' })
  findMyResume(@Req() req: RequestDto) {
    return this.resumeService.findMyResume(req.user.id);
  }

  @Get('details')
  @ApiOperation({ summary: 'Get resume details' })
  getResumeWithId(@Query('id') id: string) {
    return this.resumeService.findById(id);
  }

  @Patch()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'Update my resume' })
  update(@Body() updateResumeDto: UpdateResumeDto, @Req() req: RequestDto) {
    // return this.resumeService.update(req.user.id, updateResumeDto);
    return this.resumeService.create(req.user.id, updateResumeDto);
  }

  @Delete()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'Delete my resume' })
  delete(@Req() req: RequestDto) {
    return this.resumeService.delete(req.user.id);
  }
}
