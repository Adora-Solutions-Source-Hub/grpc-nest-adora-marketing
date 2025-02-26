import { Module } from '@nestjs/common';
import { campaignProviders } from './campaign.providers';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';

@Module({
    providers: [...campaignProviders, CampaignService],
    controllers: [CampaignController]
})
export class CampaignModule { }
