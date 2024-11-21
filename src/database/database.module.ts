import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provides';
import { ConfigService } from 'src/config/config.service';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { config } from 'dotenv';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            inject:[ConfigModule],
            useFactory:(config: ConfigService)=>({
                type:'postgres',
                host:config.get('HOST') || 'localhost',
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME')||'root',
                password: config.get('PASSWORD')||'prueba',
                database: config.get('DATABASE'),
                entities:[
                    __dirname + '/../**/*.entity{.ts,.js}',
                ]
            })
        })
    ],
    providers:[...databaseProvider, ConfigService],
    exports:[...databaseProvider]
})
export class DatabaseModule {}
