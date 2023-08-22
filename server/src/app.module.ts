import { Module } from '@nestjs/common'
import { DatabaseModule } from '@/infrastructure/database/database.module'
import { HttpModule } from '@/infrastructure/http/http.module'

@Module({
  imports: [DatabaseModule, HttpModule],
})
export class AppModule {}
