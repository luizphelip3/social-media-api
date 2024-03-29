import { UserTypeOrmRepository } from '@modules/user/domain/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entity/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserTypeOrmRepository) {}

  async execute(input: CreateUserDTO) {
    const userToCreate = new User(input);
    userToCreate.password = await hash(userToCreate.password, 10);
    const createdUser = await this.userRepository.create(userToCreate);

    return createdUser;
  }
}
