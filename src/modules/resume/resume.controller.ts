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
  @ApiOperation({ summary: 'Create a new resume' })
  @ApiResponse({ status: 201, description: 'Resume created successfully' })
  create(@Body() createResumeDto: CreateResumeDto, @Req() req: RequestDto) {
    return this.resumeService.create(req?.user?.id, createResumeDto);
  }

  @Get()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'List all resumes' })
  findAll(@Req() req: RequestDto) {
    return this.resumeService.findAll(req?.user?.id);
  }

  @Get('details')
  @ApiOperation({ summary: 'Get resume by ID' })
  findOne(@Query('id') id: string) {
    return this.resumeService.findOne(id);
  }

  @Patch()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'Update resume by ID' })
  update(@Query('id') id: string, @Body() updateResumeDto: UpdateResumeDto) {
    return this.resumeService.update(id, updateResumeDto);
  }

  @Delete()
  @UseGuards(SSOAuthGuard)
  @ApiOperation({ summary: 'Delete resume by ID' })
  delete(@Query('id') id: string) {
    return this.resumeService.delete(id);
  }
}
