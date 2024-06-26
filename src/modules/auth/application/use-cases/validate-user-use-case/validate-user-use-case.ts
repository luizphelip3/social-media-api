import {
  LoginDTO,
  UserPayload,
} from '@modules/auth/application/use-cases/validate-user-use-case/dto/validate-user.dto';
import { FindUserUseCase } from '@modules/user/application/index';
import { Inject, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

export class ValidateUserUseCase {
  constructor(
    @Inject(FindUserUseCase)
    private readonly findUserUseCase: FindUserUseCase,
    private readonly jwtService: JwtService,
  ) {}

  async execute(params: LoginDTO): Promise<UserPayload> {
    const user = await this.findUserUseCase.execute({
      email: params.email,
    });

    if (!user) {
      throw new UnauthorizedException('Email or password invalid.');
    }

    if (!(await compare(params.password, user.password))) {
      throw new UnauthorizedException('Email or password invalid.');
    }

    const { ...loggedUser } = user;

    delete loggedUser.password;

    return { ...loggedUser, accessToken: this.jwtService.sign(loggedUser) };
  }
}
