import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import { ICategory } from '../ICategory.js';
import { IMetadata } from '../IMetadata.js';

import Metadata from './Metadata.js';

@Entity()
export default class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Metadata, {
        eager: true,
        cascade: true
    })
    @JoinColumn({ name: 'meta_id', referencedColumnName: 'id' })
    meta: IMetadata;

    @Column('varchar')
    name: string;

    constructor(name: string, meta: IMetadata) {
        this.name = name;
        this.meta = meta;
    }
}
