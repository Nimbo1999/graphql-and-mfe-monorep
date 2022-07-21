import { Metadata } from '../../models/index.js';

import { IMetadataFactory } from './IFactory.js';

export default class MetadataFactory implements IMetadataFactory {
    create(): Metadata {
        return Metadata.generateInstance();
    }
}
