import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

/**
 *
 */
@Resolver('User')
export class UserResolver {
  /**
   *
   * @param userService
   */
  constructor(private readonly userService: UserService) {}

  /**
   *
   */
  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.userService.getUsers();
  }

  /**
   *
   * @param createUserDto
   */
  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
