import { EventSubscriber, EntitySubscriberInterface, RemoveEvent } from 'typeorm';
import { MetadataRepository } from '../repositories/index.js';

import { Finance } from '../models/index.js';

@EventSubscriber()
export class FinanceSubscriber implements EntitySubscriberInterface<Finance> {
    afterRemove(event: RemoveEvent<Finance>) {
        if (!!event.entity && !!event.entity.meta) MetadataRepository.remove(event.entity.meta);
    }
}
