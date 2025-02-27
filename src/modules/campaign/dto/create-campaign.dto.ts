/** @format */

import { ApiProperty } from '@nestjs/swagger';
import { CreateBriefRequest, CreateCampaignRequest } from 'src/database/marketing.pb';
// import { ValidateIf } from 'class-validator';

export class CreateCampaignDto implements CreateCampaignRequest {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  brief: CreateBriefRequest;

  @ApiProperty()
  name: string;
}

