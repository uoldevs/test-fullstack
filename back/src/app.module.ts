import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'postgres',
      entities: [`${__dirname}/typeorm/entities/*{.js,.ts}`],
      synchronize: true, // do not use in prod
    }),
    UserModule,
  ],
})
export class AppModule {}
