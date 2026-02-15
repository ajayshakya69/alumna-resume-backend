import {
  IsUUID,
  IsOptional,
  IsString,
  IsBoolean,
  IsArray,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ResumeAdditionalSections,
  ResumeCertifications,
  ResumeEducation,
  ResumeExperience,
  ResumeHobbies,
  ResumePersonalInfo,
  ResumeProfessionalSummary,
  ResumeSkills,
} from './types';

export class CreateResumeDto {
  /* -------------------------------------------------------------------------- */
  /*                                Personal Info                               */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      data: {
        full_name: 'John Doe',
        email_address: 'john@email.com',
        phone_number: '+1 999 999 9999',
      },
    },
  })
  @IsOptional()
  @IsObject()
  personal_info?: ResumePersonalInfo;

  /* -------------------------------------------------------------------------- */
  /*                         Professional Summary                               */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      summary_text: 'Senior Backend Engineer...',
    },
  })
  @IsOptional()
  @IsObject()
  professional_summary?: ResumeProfessionalSummary;

  /* -------------------------------------------------------------------------- */
  /*                                Experience                                  */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      jobs: [
        {
          company_name: 'Google',
          position: 'Software Engineer',
          start_month: 'Jan',
          start_year: '2020',
          is_current: true,
        },
      ],
      internships: [],
    },
  })
  @IsOptional()
  @IsObject()
  experience?: ResumeExperience;

  /* -------------------------------------------------------------------------- */
  /*                              Certifications                                */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      items: [
        {
          certification_name: 'AWS Certified Developer',
          issuing_organization: 'Amazon',
        },
      ],
    },
  })
  @IsOptional()
  @IsObject()
  certifications?: ResumeCertifications;

  /* -------------------------------------------------------------------------- */
  /*                                Education                                   */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      items: [
        {
          school_university: 'MIT',
          degree: 'BSc Computer Science',
        },
      ],
    },
  })
  @IsOptional()
  @IsObject()
  education?: ResumeEducation;
  /* -------------------------------------------------------------------------- */
  /*                                  Skills                                    */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      categories: [
        {
          category_name: 'Backend',
          skills: [{ skill_name: 'Node.js' }],
        },
      ],
    },
  })
  @IsOptional()
  @IsObject()
  skills?: ResumeSkills;

  /* -------------------------------------------------------------------------- */
  /*                                  Hobbies                                   */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      hobbies_and_interests: 'Reading, Cycling',
    },
  })
  @IsOptional()
  @IsObject()
  hobbies?: ResumeHobbies;

  /* -------------------------------------------------------------------------- */
  /*                            Additional Sections                             */
  /* -------------------------------------------------------------------------- */

  @ApiPropertyOptional({
    example: {
      is_visible: true,
      projects: [],
      languages: [],
      custom_sections: {},
    },
  })
  @IsOptional()
  @IsObject()
  additional_sections?: ResumeAdditionalSections;

  @ApiPropertyOptional({
    example: { template: 'modern-dark' },
  })
  @IsOptional()
  @IsObject()
  meta_data?: Record<string, unknown>;
}

export class UpdateResumeDto extends PartialType(CreateResumeDto) {}
