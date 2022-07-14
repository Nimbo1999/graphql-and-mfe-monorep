import DataSource from '../../services/datasource';

import { IMetadata } from "../../models/IMetadata";
import Metadata from '../../models/Entites/Metadata';

import { IMetadataFactory } from "../../factories/metadata/IFactory";

import { IMetadataService } from "./IService";
import { Repository } from 'typeorm';

export default class MetadataService implements IMetadataService {

    private metadataFactory: IMetadataFactory;
    private metadataRepository: Repository<Metadata>;

    constructor(metadataFactory: IMetadataFactory, metadataRepository: Repository<Metadata>) {
        this.metadataFactory = metadataFactory;
        this.metadataRepository = metadataRepository
    }

    async generate(): Promise<IMetadata> {
        const meta: IMetadata = this.metadataFactory.create();
        return this.metadataRepository.save(meta);
    }

    async update(meta: IMetadata): Promise<IMetadata> {
        const updatedMetadata = this.metadataFactory.create();
        updatedMetadata.id = meta.id;
        updatedMetadata.createdAt = meta.createdAt;
        updatedMetadata.lastModifiedAt = new Date();

        const updateResult = await DataSource.createQueryBuilder()
            .update(Metadata)
            .set(updatedMetadata)
            .where("id = :id", { id: meta.id! })
            .execute();

        console.log({raw :updateResult.raw});
        return updatedMetadata;
    }

}