import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { CoreModule } from './core/core.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        CoreModule,
        ProfileModule,
        EntitiesModule
    ],
    controllers: [
        AppController
    ],
    providers: [],

})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {
    }
}
