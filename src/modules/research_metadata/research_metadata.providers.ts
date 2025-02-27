/** @format */

import { DB } from 'src/utils';
import { ResearchMetadata } from './research_metadata.entity';

export const researchMetadataProviders = [
  {
    provide: DB.RESEARCH_METADATA_REPOSITORY,
    useValue: ResearchMetadata,
  },
];
