import { findAllCategoryByName, findAllFinance, findFinanceById } from './queries';
import { addCategory, addFinance, updateFinance } from './mutations';

export const resolvers = {
    Query: {
        findAllCategoryByName,
        findAllFinance,
        findFinanceById
    },
    Mutation: {
        addCategory,
        addFinance,
        updateFinance
    }
};
