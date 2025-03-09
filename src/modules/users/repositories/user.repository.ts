import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 *
 */
@Injectable()
export class UserRepository {
  /**
   *
   * @param userModel
   */
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   *
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  /**
   *
   */
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  /**
   *
   * @param id
   */
  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}
