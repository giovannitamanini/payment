import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCardModule } from './credit-card/credit-card.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CreditCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
