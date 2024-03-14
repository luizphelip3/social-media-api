import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../../../../../infra/entity/user.entity';
import { ChangePasswordUserUseCase } from '../../change-password-user.use-case';

export async function mockChangePasswordUserUseCaseTestModule(): Promise<TestingModule> {
  return await Test.createTestingModule({
    providers: [
      ChangePasswordUserUseCase,
      {
        provide: 'IUserRepository',
        useValue: {
          findById: jest.fn(),
          update: jest.fn(),
        },
      },
    ],
    imports: [User],
  }).compile();
}

export const mockChangePassswordUserParams = {
  id: '',
  oldPassword: 'password123',
  newPassword: 'password1234',
};

export const mockCreateUserResult = {
  id: 'b4beacf5-106b-487f-a7ce-4a31dcfaad62',
  name: 'Luiz Phelipe',
  email: 'luizphelipe@email.com',
  phone: 'phone123',
  isPrivate: false,
  createdAt: '2024-03-12T15:50:48.000Z',
  updatedAt: '2024-03-12T15:50:48.000Z',
  deletedAt: null,
};

export const mockEmailUniqueErrorWhileCreateUserResult = {
  message: 'This email is already beaing used.',
  error: 'Bad Request',
  statusCode: 400,
};

export const mockPhoneUniqueErrorWhileCreateUserResult = {
  message: 'This phone is already beaing used.',
  error: 'Bad Request',
  statusCode: 400,
};

export const mockGenericErrorWhileCreateUserResult = {
  message: 'Could not create user.',
  error: 'Internal Server Error',
  statusCode: 500,
};

export const mockUsersArray = [
  {
    id: 'b4beacf5-106b-487f-a7ce-4a31dcfaad62',
    name: 'Luiz Phelipe',
    email: 'luiz.teste@teste.com',
    phone: '77 998363649',
    isPrivate: false,
    createdAt: '2024-03-12T15:50:48.000Z',
    updatedAt: '2024-03-12T15:50:48.000Z',
    deletedAt: null,
  },
  {
    id: '5b987cc3-a85e-4d42-ace2-3ad2cafa27ad',
    name: 'Luiz Phelipe',
    email: 'luiz.teste@teste2.com',
    phone: '77 998363648',
    isPrivate: false,
    createdAt: '2024-03-12T15:50:55.000Z',
    updatedAt: '2024-03-12T15:50:55.000Z',
    deletedAt: null,
  },
];

export const mockUsersArrayEmpty = [];