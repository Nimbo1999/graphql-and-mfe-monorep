import { findAllCategoryByName } from './queries';
import { addCategory, addFinance } from './mutations';

export const resolvers = {
    Query: {
        findAllCategoryByName
    },
    Mutation: {
        addCategory,
        addFinance
    }
};
