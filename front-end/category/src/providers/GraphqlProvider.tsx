import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface GraphqlProviderProps {
    children: React.ReactNode;
}

const GraphqlProvider: React.FC<GraphqlProviderProps> = ({ children }) => {
    const client = new ApolloClient({
        uri: 'http://localhost:8000',
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

export default GraphqlProvider;
