import { categoriesResolver } from "./queries/categories";
import { financeResolver } from "./queries/finance";
import { addCategory } from './mutations';

export const resolvers = {
    Query: {
        categories: categoriesResolver,
        finance: financeResolver
    },
    Mutation: {
        addCategory 
    }
};