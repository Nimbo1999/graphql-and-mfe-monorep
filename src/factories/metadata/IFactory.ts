import { type IMetadata } from '../../models';

export interface IMetadataFactory {
    create(): IMetadata;
}
