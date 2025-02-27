import { Module } from '@nestjs/common';
import { researchMetadataProviders } from './research_metadata.providers';

@Module({
    providers: [...researchMetadataProviders]
})
export class ResearchMetadataModule { }
