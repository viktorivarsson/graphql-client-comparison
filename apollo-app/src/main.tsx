import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Routes } from './routes';
import { client } from './apollo';
import { Loader } from './components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
