import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';
import { Routes } from './routes';
import { environment } from './relay';
import { Loader } from './components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
