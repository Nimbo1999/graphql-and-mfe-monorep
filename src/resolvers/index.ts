import { findCategory }  from './queries';
import { addCategory } from './mutations';

export const resolvers = {
    Query: {
        findCategory
    },
    Mutation: {
        addCategory
    }
};