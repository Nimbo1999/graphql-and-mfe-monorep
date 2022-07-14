import { type Category } from "models/Category";

export const categoriesResolver = (...params: any): Category[] => {
    console.log(params);
    return [{
        id: 'category',
        meta: {
            createdAt: new Date().toISOString(),
            lastModifiedAt: new Date().toISOString(),
            objectId: 'category',
        },
        name: "Category X"
    }];
}