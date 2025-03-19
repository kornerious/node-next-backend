import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';  // ✅ Import OrdersModule
import { ShopModule } from './shop/shop.module';  // ✅ Import ShopModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    OrdersModule,  // ✅ Register Orders Module
    ShopModule,  // ✅ Register Shop Module
  ],
})
export class AppModule {}