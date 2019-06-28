import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { UserModule } from '../core/user/user.module';
import { UserEntity } from "../core/user/user.entity";
import { FollowsEntity } from "./follows.entity";
import { AuthMiddleware } from "../core/auth/auth.middleware";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, FollowsEntity]), UserModule],
    providers: [ProfileService],
    controllers: [
        ProfileController
    ],
    exports: []
})
export class ProfileModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({path: 'profiles/:username/follow', method: RequestMethod.ALL});
    }
}
