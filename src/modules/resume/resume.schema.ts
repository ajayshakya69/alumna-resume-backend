import {
  Sequelize,
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import {
  ResumePersonalInfo,
  ResumeProfessionalSummary,
  ResumeAdditionalSections,
  ResumeSkills,
  ResumeExperience,
  ResumeCertifications,
  ResumeEducation,
  ResumeSocialLinks,
  ResumeHobbies,
} from './types';

export class ResumeModel extends Model<
  InferAttributes<ResumeModel>,
  InferCreationAttributes<ResumeModel>
> {
  declare id: CreationOptional<string>;
  declare user_id: CreationOptional<string>;
  declare selectedTemplate: CreationOptional<string>;
  declare resume_link: CreationOptional<string>;
  declare personal_info: CreationOptional<ResumePersonalInfo>;
  declare professional_summary: CreationOptional<ResumeProfessionalSummary>;
  declare experience: CreationOptional<ResumeExperience>;
  declare certifications: CreationOptional<ResumeCertifications>;
  declare education: CreationOptional<ResumeEducation>;
  declare skills: CreationOptional<ResumeSkills>;
  declare websites_social_links: CreationOptional<ResumeSocialLinks>;
  declare hobbies: CreationOptional<ResumeHobbies>;
  declare additional_sections: CreationOptional<ResumeAdditionalSections>;
  declare meta_data: CreationOptional<Record<string, unknown>>;
  declare readonly created_at: CreationOptional<Date>;
  declare readonly updated_at: CreationOptional<Date>;

  static setup(sequelize: Sequelize) {
    ResumeModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },

        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
          unique: true,
        },

        resume_link: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        selectedTemplate: {
          type: DataTypes.TEXT,
          allowNull: true,
        },

        personal_info: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        professional_summary: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        experience: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        certifications: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        education: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        skills: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        websites_social_links: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        hobbies: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        additional_sections: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        meta_data: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },

        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },

        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'resumes',
        modelName: 'resumes',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    );

    return ResumeModel;
  }
}
