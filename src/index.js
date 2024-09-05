import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterContextProvider from './Context/Counter';
import TokenContextProvider from './Context/Token';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '../node_modules/react-query/es/devtools'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContextProvider from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let query = new QueryClient()
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <QueryClientProvider client={query}>
      <TokenContextProvider>
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      </TokenContextProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
