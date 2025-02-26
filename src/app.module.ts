import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { CampaignModule } from './modules/campaign/campaign.module';
import { BriefModule } from './modules/brief/brief.module';
import { ResearchMetadataModule } from './modules/research_metadata/research_metadata.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || "",
      signOptions: { expiresIn: "1d" },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CampaignModule,
    BriefModule,
    ResearchMetadataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
