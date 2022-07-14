import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import { ICategory } from 'models/ICategory';
import { IMetadata } from 'models/IMetadata';

import Metadata from './Metadata';

@Entity()
export default class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Metadata)
    @JoinColumn({ name: "meta_id" })
    meta: IMetadata;

    @Column("varchar")
    name: string;

    constructor(name: string, meta: IMetadata) {
        this.name = name;
        this.meta = meta;
    }
}