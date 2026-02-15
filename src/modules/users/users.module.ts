import { Module } from '@nestjs/common';
import { ClassesController, UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UserController, ClassesController],
  providers: [UserService],
})
export class UserModule {}
