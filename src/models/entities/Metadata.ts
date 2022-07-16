import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IMetadata } from '../IMetadata';

@Entity()
export default class Metadata implements IMetadata {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column('timestamptz', { name: 'created_at' })
    createdAt!: Date;

    @Column('timestamptz', { name: 'last_modified_at' })
    lastModifiedAt!: Date;

    private constructor() {
        this.createdAt = new Date();
        this.lastModifiedAt = new Date();
    }

    static generateInstance(): Metadata {
        return new Metadata();
    }
}
