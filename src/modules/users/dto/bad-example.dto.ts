import { Field, InputType } from '@nestjs/graphql';

// This is a poorly commented dto with no jsdoc
/**
 *
 */
@InputType()
export class BadExampleDto {
  @Field({ nullable: true })
  name?: string; // Inline comment that violates our rules

  @Field({ nullable: true })
  email?: string;
}
