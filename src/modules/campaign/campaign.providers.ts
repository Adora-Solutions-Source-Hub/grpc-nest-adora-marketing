/** @format */

import { DB } from 'src/utils';
import { Campaign } from './campaign.entity';

export const campaignProviders = [
  {
    provide: DB.CAMPAIGN_REPOSITORY,
    useValue: Campaign,
  },
];
