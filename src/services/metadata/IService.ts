import { IMetadata } from '../../models/index.js';

export interface IMetadataService {
    generate(): IMetadata;
    update(meta: IMetadata): Promise<IMetadata>;
}
