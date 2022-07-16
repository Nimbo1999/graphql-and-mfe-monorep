import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import { ICategory } from '../ICategory';
import { IMetadata } from '../IMetadata';

import Metadata from './Metadata';

@Entity()
export default class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Metadata, { eager: true })
    @JoinColumn({ name: 'meta_id', referencedColumnName: 'id' })
    meta: IMetadata;

    @Column('varchar')
    name: string;

    constructor(name: string, meta: IMetadata) {
        this.name = name;
        this.meta = meta;
    }
}
