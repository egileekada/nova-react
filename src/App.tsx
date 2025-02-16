import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { NovaWatchParty } from './content/content';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <ErrorBoundary>
      <NovaWatchParty />
    </ErrorBoundary>
  );
};

export default App; 