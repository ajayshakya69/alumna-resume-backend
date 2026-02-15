import { ClassSchema, UserModel } from 'src/modules/users/users.schema';

export const MONGOOSE_MODELS = {
  Class: ClassSchema,
};

export const SQL_MODELS = {
  UserModel: UserModel.setup,
};
