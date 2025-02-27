import { Controller, Inject } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateCampaignRequest, MARKETING_SERVICE_NAME } from 'src/database/marketing.pb';
import { convertSnake } from 'src/utils';

@Controller('campaign')
export class CampaignController {
    // createCampaign
    @Inject(CampaignService)
    private readonly campaignService: CampaignService;

    @GrpcMethod(MARKETING_SERVICE_NAME, 'CreateCampaign')
    private async createCampaign(payload: CreateCampaignRequest) {
        console.log("🚀 ~ CampaignController ~ createCampaign ~ payload:", convertSnake(payload.brief))
        console.log("🚀 ~ CampaignController ~ createCampaign ~ payload:", convertSnake({ ...payload, brief: convertSnake(payload.brief) }))
        // return payload;
        const rs = await this.campaignService.createCampaign();
        console.log("🚀 ~ AuthController ~ register ~ user:", rs)
        return rs;
    }
}
