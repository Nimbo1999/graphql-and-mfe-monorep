import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import { IMetadata } from 'models/IMetadata';
import { IFinance } from 'models/IFinance';
import { ICategory } from 'models/ICategory';

import Metadata from './Metadata';
import Category from './Category';

@Entity()
export default class Finance implements IFinance {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Metadata, { eager: true })
    @JoinColumn({ name: 'meta_id', referencedColumnName: 'id' })
    meta!: IMetadata;

    @Column('decimal')
    amount!: number;

    @Column('varchar')
    description?: string;

    @OneToOne(() => Category)
    @JoinColumn({ name: 'category_id' })
    category!: ICategory;
}
