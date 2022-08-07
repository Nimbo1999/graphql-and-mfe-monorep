import { ApolloClient, ApolloProvider } from '@apollo/client';

import cache from './InMemoryCache';

interface GraphqlProviderProps {
    children: React.ReactNode;
}

const GraphqlProvider: React.FC<GraphqlProviderProps> = ({ children }) => {
    const client = new ApolloClient({
        uri: 'http://localhost:8000',
        cache
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphqlProvider;
