import { EventSubscriber, EntitySubscriberInterface, RemoveEvent } from 'typeorm';
import { MetadataRepository } from '../repositories';

import { Finance } from '../models';

@EventSubscriber()
export class FinanceSubscriber implements EntitySubscriberInterface<Finance> {
    afterRemove(event: RemoveEvent<Finance>) {
        if (!!event.entity && !!event.entity.meta) MetadataRepository.remove(event.entity.meta);
    }
}
