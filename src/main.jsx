import React from 'react';
import { createRoot } from 'react-dom/client';
import { siteContent } from './content/siteContent.js';
import './styles/global.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App content={siteContent} />
  </React.StrictMode>,
);
