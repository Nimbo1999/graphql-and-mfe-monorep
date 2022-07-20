import { IMetadata } from '../../models';

export interface IMetadataService {
    generate(): IMetadata;
    update(meta: IMetadata): Promise<IMetadata>;
}
