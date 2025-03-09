import { Field, InputType } from '@nestjs/graphql';

// This is a poorly commented dto with no jsdoc
/**
 *
 */
@InputType()
export class BadExampleDto {
  @Field({ nullable: true })
  // Inline comment that violates our rules
  name?: string;

  @Field({ nullable: true })
  email?: string;
}
