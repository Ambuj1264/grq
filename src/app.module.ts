import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/code.module';
import { UserModule } from './modules/users/user.module';
import { join } from 'path';

/**
 *
 */
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-graphql'),
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
})
export class AppModule {}
