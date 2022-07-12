import { type Metadata } from 'models/metadata';

const metadata: Metadata = {
    objectId: 'abc',
    createdAt: new Date().toISOString(),
    lastModifiedAt: new Date().toISOString(),
};

export const resolvers = {
    Query: {
        metadata(): Metadata {
            return metadata;
        }
    },
};