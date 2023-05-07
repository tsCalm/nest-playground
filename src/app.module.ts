import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';
import { PassportModule } from '@nestjs/passport';
import { FileSyncModule } from './file-sync/file-sync.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_playground',
      entities: entities,
      synchronize: false,
    }),
    AuthModule,
    PassportModule.register({
      session: true,
    }),
    FileSyncModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
