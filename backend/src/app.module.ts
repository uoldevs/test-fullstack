import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './shared/entities/client/client.module';
import ClientMiddleware from './shared/entities/client/client.middleware';
import ApiRoutes from './constants/ApiRoutes';

@Module({
  imports: [
    ClientModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ClientMiddleware)
      .exclude({ path: ApiRoutes.CLIENTS, method: RequestMethod.GET })
      .forRoutes({ path: ApiRoutes.CLIENTS, method: RequestMethod.ALL });
  }
}
