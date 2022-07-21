import { EventSubscriber, EntitySubscriberInterface, RemoveEvent } from 'typeorm';
import { MetadataRepository } from '../repositories/index.js';

import { Category } from '../models/index.js';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface<Category> {
    afterRemove(event: RemoveEvent<Category>) {
        if (!!event.entity && !!event.entity.meta) MetadataRepository.remove(event.entity.meta);
    }
}
