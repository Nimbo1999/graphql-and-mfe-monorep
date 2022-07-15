import Metadata from "../../models/entities/Metadata";

import { IMetadataFactory } from "./IFactory";

export default class MetadataFactory implements IMetadataFactory {

    create(): Metadata {
        return Metadata.generateInstance();
    }

}