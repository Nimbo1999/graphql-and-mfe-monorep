import { type Book } from 'models/book';

const books: Book[] = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

export const resolvers = {
    Query: {
        books(): Book[] {
            return books
        }
    },
};