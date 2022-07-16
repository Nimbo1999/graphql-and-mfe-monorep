import { IMetadata } from '../../models';

export interface IMetadataService {
    generate(): Promise<IMetadata>;
    update(meta: IMetadata): Promise<IMetadata>;
}
