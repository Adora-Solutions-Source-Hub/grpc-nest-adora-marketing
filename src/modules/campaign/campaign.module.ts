import { Module } from '@nestjs/common';
import { campaignProviders } from './campaign.providers';

@Module({
    providers: [...campaignProviders]
})
export class CampaignModule { }
