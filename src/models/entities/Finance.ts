import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import { IMetadata } from '../IMetadata.js';
import { IFinance } from '../IFinance.js';
import { ICategory } from '../ICategory.js';

import Metadata from './Metadata.js';
import Category from './Category.js';

@Entity()
export default class Finance implements IFinance {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Metadata, {
        eager: true,
        cascade: true
    })
    @JoinColumn({ name: 'meta_id', referencedColumnName: 'id' })
    meta!: IMetadata;

    @Column('decimal')
    amount!: number;

    @Column('varchar')
    description?: string;

    @OneToOne(() => Category, { eager: true })
    @JoinColumn({ name: 'category_id' })
    category!: ICategory;
}
