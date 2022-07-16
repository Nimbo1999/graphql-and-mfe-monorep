import { IMetadata } from '../../models/IMetadata';

export interface IMetadataService {
    generate(): Promise<IMetadata>;
    update(meta: IMetadata): Promise<IMetadata>;
}
