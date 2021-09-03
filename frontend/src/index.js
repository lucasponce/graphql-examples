import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: '/query',
    cache: new InMemoryCache()
});

const HELLO_WORLD = gql`      { hello }  `;

function HelloWorld() {
    const { loading, error, data } = useQuery(HELLO_WORLD);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            {data.hello}
        </div>
    );
}

function App() {
    return (
        <div>
            <h2>My first Apollo app</h2>
            <HelloWorld />
        </div>
    );
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
