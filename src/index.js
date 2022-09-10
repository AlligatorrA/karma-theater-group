import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DustProvider } from './components/useContext/dust-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DustProvider>
      <App />
    </DustProvider>
  </React.StrictMode>
);