import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 * User Entity
 * @description This class represents a user in the system.
 * @best-practice Uses both GraphQL and MongoDB decorators for proper schema generation and type safety.
 * @best-practice Extends the Mongoose Document class to leverage MongoDB functionality.
 */
@ObjectType()
@Schema()
export class User extends Document {
  /**
   * Unique identifier for the user
   * @best-practice Explicitly exposes _id as a GraphQL ID type
   * @best-practice Mongoose automatically generates this field
   */
  @Field(() => ID)
  _id: string;

  /**
   * The user's full name
   * @best-practice Uses both GraphQL and MongoDB decorators
   * @best-practice Marks as required for data integrity
   */
  @Field()
  @Prop({ required: true })
  name: string;

  /**
   * The user's email address
   * @best-practice Marked as unique to prevent duplicate accounts
   * @best-practice Required field to ensure all users have an email address
   * @best-practice Exposed to GraphQL for queries and mutations
   */
  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  /**
   * The user's password (hashed)
   * @best-practice Not exposed to GraphQL with @Field() for security
   * @best-practice Should store only hashed passwords, never plaintext
   * @best-practice Required to ensure authentication integrity
   */
  @Prop({ required: true })
  password: string;

  /**
   * Timestamp when the user was created
   * @best-practice Uses automatic timestamp through default: Date.now
   * @best-practice Helps with auditing and data analysis
   */
  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;
}

/**
 * Mongoose schema generated from the User class
 * @best-practice Uses SchemaFactory for type-safe schema generation
 */
export const UserSchema = SchemaFactory.createForClass(User);
