import { IMetadata } from 'models/IMetadata';

export interface IMetadataFactory {
    create(): IMetadata;
}
