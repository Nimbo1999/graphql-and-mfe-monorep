import { Component, createContext, JSX, useContext } from "solid-js";
import { createGraphQLClient, GraphQLClientQuery } from '@solid-primitives/graphql';

type GraphqlContext = GraphQLClientQuery;

const defaultGraphQLValue: GraphqlContext = createGraphQLClient('http://localhost:8000')

const GrapgQLContext = createContext<GraphqlContext>(defaultGraphQLValue);

interface GraphqlProviderProps {
    children: JSX.Element;
}

const GraphqlProvider: Component<GraphqlProviderProps> = ({ children }) => {
    return (
        <GrapgQLContext.Provider value={defaultGraphQLValue}>
            {children}
        </GrapgQLContext.Provider>
    );
}

export const useGraphqlClient = () => useContext(GrapgQLContext);

export default GraphqlProvider;