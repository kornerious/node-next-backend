import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';
import { ShopModule } from './shop/shop.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(), // ✅ Load .env file

    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE === 'postgres' ? 'postgres' : 'sqlite',
      host: process.env.DB_TYPE === 'postgres' ? process.env.DB_HOST : undefined,
      port: process.env.DB_TYPE === 'postgres' ? Number(process.env.DB_PORT) : undefined,
      database:
          process.env.DB_TYPE === 'sqlite'
              ? join(__dirname, '..', 'data', 'database.sqlite') // ✅ Local SQLite Path
              : process.env.DB_NAME, // ✅ Use Railway PostgreSQL DB
      username: process.env.DB_TYPE === 'postgres' ? process.env.DB_USER : undefined,
      password: process.env.DB_TYPE === 'postgres' ? process.env.DB_PASS : undefined,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ✅ Auto-sync database schema (disable in production)
    }),

    OrdersModule, // ✅ Register OrdersModule
    ShopModule, // ✅ Register ShopModule
  ],
})
export class AppModule {}
