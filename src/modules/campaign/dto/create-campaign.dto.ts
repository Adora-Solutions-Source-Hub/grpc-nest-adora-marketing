/** @format */

import { ApiProperty } from '@nestjs/swagger';
// import { ValidateIf } from 'class-validator';

export class CreateCampaignDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  user_id: string;

}

