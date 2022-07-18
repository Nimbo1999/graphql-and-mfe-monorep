import { findAllCategoryByName, findAllFinance } from './queries';
import { addCategory, addFinance } from './mutations';

export const resolvers = {
    Query: {
        findAllCategoryByName,
        findAllFinance
    },
    Mutation: {
        addCategory,
        addFinance
    }
};
