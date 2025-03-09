/**
 * Database Module - Configures and provides MongoDB connection using Mongoose
 *
 * This module is responsible for:
 * - Setting up the MongoDB connection using the MONGO_URI environment variable
 * - Providing the MongooseModule to other modules that need database access
 * - Exporting MongooseModule to make it available throughout the application
 */

// src/core/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/**
 *
 */
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
      retryWrites: true,
      retryAttempts: 3,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
