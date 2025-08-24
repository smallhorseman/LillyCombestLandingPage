import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the consolidated App component

// Find the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root and render the App component inside it
// ReactDOM.createRoot is the modern way to hydrate a React application.
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
