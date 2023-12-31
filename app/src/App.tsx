import React from 'react';
import ReactGA from 'react-ga4';

import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Router } from './router/router';
import ProgramApisProvider from './providers/ProgramApisProvider';
import RafflesStoreProvider from './providers/RafflesStoreProvider';
import ViewportProvider from './providers/ViewportProvider';
import ThemeProvider from './providers/ThemeProvider';
import Wallet from './components/Wallet';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import useVersionChecker from './hooks/useVersionChecker';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(
      String(process.env.REACT_APP_GA_PRODUCTION)
  )
}

const App = () => {
  useVersionChecker();

  return (
    <ViewportProvider>
      <CssBaseline />
      <ThemeProvider>
        <BrowserRouter>
          <Wallet>
            <ProgramApisProvider>
              <RafflesStoreProvider>
                <Router />
                <Toaster
                  position="bottom-left"
                  reverseOrder={false}
                  toastOptions={{
                    duration: 5000,
                  }}
                />
                <ScrollToTop />
              </RafflesStoreProvider>
            </ProgramApisProvider>
          </Wallet>
        </BrowserRouter>
      </ThemeProvider>
    </ViewportProvider>
  );
};

export default App;
