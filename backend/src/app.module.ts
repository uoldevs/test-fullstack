import { Module } from '@nestjs/common';
import { ClientModule } from './shared/client/client.module';

@Module({
  imports: [ClientModule],
})
export class AppModule {}
