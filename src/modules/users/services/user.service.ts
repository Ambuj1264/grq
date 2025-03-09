// Src/modules/user/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 *
 */
@Injectable()
export class UserService {
  /**
   *
   * @param userRepository
   */
  constructor(private readonly userRepository: UserRepository) {}

  /**
   *
   * @param data
   */
  async createUser(data: CreateUserDto) {
    return this.userRepository.create(data);
  }

  /**
   *
   */
  async getUsers() {
    return this.userRepository.findAll();
  }
}
