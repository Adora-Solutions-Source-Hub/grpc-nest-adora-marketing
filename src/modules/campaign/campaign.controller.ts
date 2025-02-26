import { Controller, Inject } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { GrpcMethod } from '@nestjs/microservices';
import { MARKETING_SERVICE_NAME } from 'src/database/marketing.pb';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Controller('campaign')
export class CampaignController {
    // createCampaign
    @Inject(CampaignService)
    private readonly campaignService: CampaignService;

    @GrpcMethod(MARKETING_SERVICE_NAME, 'CreateCampaign')
    private async createCampaign(payload: CreateCampaignDto) {
        console.log("🚀 ~ CampaignController ~ createCampaign ~ payload:", payload)
        // return payload;
        const rs = await this.campaignService.createCampaign();
        console.log("🚀 ~ AuthController ~ register ~ user:", rs)
        return rs;
    }
}
