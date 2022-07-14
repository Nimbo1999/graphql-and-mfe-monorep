import Metadata from "../../models/Entites/Metadata";

import { IMetadataFactory } from "./IFactory";

export default class MetadataFactory implements IMetadataFactory {

    create(): Metadata {
        return Metadata.generateInstance();
    }

}