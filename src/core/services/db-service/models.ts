import { ResumeModel } from 'src/modules/resume/resume.schema';

export const MONGOOSE_MODELS = {};

export const SQL_MODELS = {
  ResumeModel: ResumeModel.setup,
};
