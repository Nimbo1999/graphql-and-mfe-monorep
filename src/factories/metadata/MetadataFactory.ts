import { Metadata } from '../../models';

import { IMetadataFactory } from './IFactory';

export default class MetadataFactory implements IMetadataFactory {
    create(): Metadata {
        return Metadata.generateInstance();
    }
}
