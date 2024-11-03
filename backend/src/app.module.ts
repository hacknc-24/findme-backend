import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:59031/chess', {
      user: 'chess',
      pass: 'chess',    }),
    PassportModule,
    JwtModule.register({
      secret: 'abc123',
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
