// Src/modules/user/resolvers/user.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 *
 */
@Resolver(() => User)
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
  getUsers() {
    return this.userService.getUsers();
  }

  /**
   *
   * @param data
   */
  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
