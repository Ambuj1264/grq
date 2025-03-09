import { Field, InputType } from '@nestjs/graphql';

/**
 * Data Transfer Object for updating a user
 * @description This DTO is used when updating an existing user's information
 * @best-practice Only includes fields that are allowed to be updated
 * @best-practice All fields are optional to allow partial updates
 */
@InputType()
export class UpdateUserDto {
  /**
   * The user's name
   * @description User's full name that will be displayed in the system
   */
  @Field({ nullable: true })
  name?: string;

  /**
   * The user's email address
   * @description Primary contact email, must be unique in the system
   */
  @Field({ nullable: true })
  email?: string;
}
